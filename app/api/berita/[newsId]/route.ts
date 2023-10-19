import { db } from "@/lib/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { newsId: string } }
) {
  const { newsId } = params;
  try {
    await deleteDoc(doc(db, "berita", newsId));

    const response = NextResponse.json(
      { success: true, message: "Berita deleted successfully" },
      { status: 200, headers: { "content-type": "application/json" } }
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
