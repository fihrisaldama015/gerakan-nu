import { db } from "@/lib/firebase";
import { Comment } from "@/types/comment";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  {
    params,
  }: {
    params: {
      newsId: string;
      commentId: string;
    };
  }
) {
  const { newsId, commentId } = params;
  const { message, email } = await request.json();
  if (!message || !email) {
    const response = NextResponse.json(
      {
        success: false,
        message: "Invalid request, missing required field `message` | `email`",
      },
      { status: 400, headers: { "content-type": "application/json" } }
    );
    return response;
  }
  try {
    const commentRef = doc(
      db,
      "berita",
      `${newsId}`,
      "comments",
      `${commentId}`
    );
    const userRef = doc(db, "users", `${email}`);
    const user = await getDoc(userRef);
    const userData = user.data() as User;
    const { nama } = userData;

    const prevoiusComment = await getDoc(commentRef);
    const previousCommentData = prevoiusComment.data() as Comment;
    const commentChild = previousCommentData.commentChild
      ? previousCommentData.commentChild
      : [];

    const comment: Comment = {
      id: `${commentChild.length + 1}`,
      comment: message,
      username: nama,
      avatar: "/icons/user.svg",
      date: Date.now(),
    };

    commentChild.push(comment);

    await setDoc(
      commentRef,
      { ...previousCommentData, commentChild },
      { merge: true }
    );

    const response = NextResponse.json(
      {
        success: true,
        message: `Komentar berhasil dikirim ke berita => ${newsId}, komentar => ${commentId}`,
        comment: {
          comment: message,
          username: nama,
          avatar: "/icons/user.svg",
          date: Date.now(),
        },
      },
      { status: 200, headers: { "content-type": "application/json" } }
    );
    return response;
  } catch (error) {
    if (error instanceof Error) {
      const response = NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        { status: 500, headers: { "content-type": "application/json" } }
      );
      return response;
    }
  }
}
