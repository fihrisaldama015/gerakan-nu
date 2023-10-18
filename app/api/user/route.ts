import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import jwt, { JwtPayload } from "jsonwebtoken";
import { NextResponse } from "next/server";

interface JWTResponse extends JwtPayload {
  uid: string;
  email: string;
  displayName: string;
}
export async function GET(request: Request) {
  const token = request.headers.get("authorization")?.split(" ")[1];
  if (token === "undefined")
    return NextResponse.json(
      { success: false, message: "Token not found, please login!" },
      { status: 400, headers: { "content-type": "application/json" } }
    );

  try {
    const decoded = jwt.decode(`${token}`) as JWTResponse;
    if (!decoded) {
      throw new Error("Invalid Token");
    }
    const email = decoded.email;

    const docRef = doc(db, "users", `${email}`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const response = NextResponse.json(
        {
          success: true,
          message: "User Data successfully",
          data: docSnap.data(),
        },
        { status: 200, headers: { "content-type": "application/json" } }
      );
      return response;
    } else {
      const response = NextResponse.json(
        {
          success: false,
          message: "User Data not found",
        },
        { status: 404, headers: { "content-type": "application/json" } }
      );
      return response;
    }
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 400, headers: { "content-type": "application/json" } }
      );
    }
  }
}
