import { db } from "@/lib/firebase";
import { Comment } from "@/types/comment";
import { collection, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { newsId: string } }
) {
  const { newsId } = params;
  if (!newsId) {
    const response = NextResponse.json(
      {
        success: false,
        message: "Invalid request, missing required field `newsId`",
      },
      { status: 400, headers: { "content-type": "application/json" } }
    );
    return response;
  }
  try {
    let allComment: Comment[] = [];
    const commentRef = collection(db, "berita", `${newsId}`, "comments");
    const querySnapshot = await getDocs(commentRef);
    querySnapshot.forEach((doc) => {
      const item = doc.data() as Comment;
      const { username, avatar, comment, date, commentChild } = item;
      const temp = {
        id: doc.id,
        username,
        avatar,
        comment,
        date,
        commentChild,
      };
      allComment.push(temp);
    });
    const response = NextResponse.json(
      {
        success: true,
        message: "Komentar berhasil diambil",
        data: allComment,
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
