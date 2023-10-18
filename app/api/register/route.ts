import { db } from "@/lib/firebase";
import bcrypt from "bcrypt";
import { FirebaseError } from "firebase/app";
import { doc, setDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password, nama, jenisKelamin, phone, tglLahir } = body;
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    await setDoc(doc(db, "users", `${email}`), {
      email,
      password: hashedPassword,
      nama,
      jenisKelamin,
      phone,
      tglLahir,
    });
    const response = NextResponse.json(
      {
        success: true,
        message: "User registered successfully",
        data: { email, nama, jenisKelamin, phone, tglLahir },
      },
      { status: 200, headers: { "content-type": "application/json" } }
    );
    return response;
  } catch (error) {
    if (error instanceof FirebaseError) {
      return NextResponse.json(
        { success: false, message: error.code },
        { status: 400, headers: { "content-type": "application/json" } }
      );
    } else if (error instanceof Error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 400, headers: { "content-type": "application/json" } }
      );
    }
  }
}
