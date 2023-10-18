import { db } from "@/lib/firebase";
import bcrypt from "bcrypt";
import { FirebaseError } from "firebase/app";
import { doc, getDoc } from "firebase/firestore";
import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;
  try {
    const docRef = doc(db, "users", `${email}`);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      const response = NextResponse.json(
        {
          success: false,
          message: "Email not registered",
        },
        { status: 400, headers: { "content-type": "application/json" } }
      );
      return response;
    }
    const user = docSnap.data();
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      const response = NextResponse.json(
        {
          success: false,
          message: "Invalid Password",
        },
        { status: 400, headers: { "content-type": "application/json" } }
      );
      return response;
    }

    const jwtToken = {
      uid: nanoid(16),
      email: user.email,
      displayName: user.nama,
      iss: `${process.env.NEXT_PUBLIC_APP_URL}`,
      aud: `${process.env.NEXT_PUBLIC_APP_URL}`,
      sub: user.uid,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 3600 * 6,
    };
    const accessToken = jwt.sign(
      jwtToken,
      `${process.env.NEXT_PUBLIC_JWT_SECRET}`
    );
    const response = NextResponse.json(
      { success: true, accessToken },
      { status: 200, headers: { "content-type": "application/json" } }
    );

    response.cookies.set({
      name: "accessToken",
      value: accessToken,
      maxAge: 3600 * 6,
    });
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
