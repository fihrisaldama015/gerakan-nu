import { db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const { email, password, confirmPassword } = await request.json();
    if (password !== confirmPassword) {
      const response = NextResponse.json(
        { success: false, message: "Passwords do not match" },
        { status: 400, headers: { "content-type": "application/json" } }
      );
      return response;
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    await setDoc(doc(db, "admin", `${email}`), {
      email,
      password: hashedPassword,
    });
    const response = NextResponse.json(
      {
        success: true,
        message: "User created successfully",
        data: { email, password: hashedPassword },
      },
      { status: 201, headers: { "content-type": "application/json" } }
    );
    return response;
  } catch (error) {
    if (error instanceof Error) {
      const response = NextResponse.json(
        { success: false, message: error.message },
        { status: 500, headers: { "content-type": "application/json" } }
      );
      return response;
    }
  }
}
