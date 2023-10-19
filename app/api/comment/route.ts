import { db } from "@/lib/firebase";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { message, newsId, email } = await request.json();
  if (!message || !newsId || !email) {
    const response = NextResponse.json(
      {
        success: false,
        message:
          "Invalid request, missing required field `message` | `newsId` | `email`",
      },
      { status: 400, headers: { "content-type": "application/json" } }
    );
    return response;
  }
  try {
    const commentRef = collection(db, "berita", `${newsId}`, "comments");
    const userRef = doc(db, "users", `${email}`);
    const user = await getDoc(userRef);
    const userData = user.data() as User;
    const { nama } = userData;

    const comment = {
      comment: message,
      username: nama,
      avatar: "/icons/user.svg",
      date: Date.now(),
    };
    await addDoc(commentRef, comment);
    const response = NextResponse.json(
      {
        success: true,
        message: "Komentar berhasil dikirim",
        comment,
      },
      { status: 200, headers: { "content-type": "application/json" } }
    );
    return response;
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 400, headers: { "content-type": "application/json" } }
      );
    }
  }
}
