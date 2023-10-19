import { db } from "@/lib/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    let berita: Berita[] = [];
    const querySnapshot = await getDocs(collection(db, "berita"));
    querySnapshot.forEach((doc) => {
      const temp = {
        id: doc.id,
        title: doc.data().title as string,
        body: doc.data().body as string,
        dokumentasi: {
          keterangan: doc.data().dokumentasi.keterangan as string,
          url: doc.data().dokumentasi.url as string,
        },
        date: doc.data().date as string,
        author: doc.data().author as string,
        tags: doc.data().tags as string[],
      };
      berita.push(temp);
    });

    const response = NextResponse.json(
      {
        success: true,
        message: "get Berita successfully",
        data: (berita as Berita[]) || [],
      },
      { status: 200, headers: { "content-type": "application/json" } }
    );
    return response;
  } catch (error) {}
}
export async function POST(request: Request) {
  try {
    const { title, body, date, author, city, tags, dokumentasi } =
      await request.json();

    await addDoc(collection(db, "berita"), {
      title,
      body,
      date,
      author,
      city,
      tags,
      dokumentasi,
    });

    const response = NextResponse.json(
      {
        success: true,
        message: "Post created successfully",
        data: { title, body, date, author, city, tags, dokumentasi },
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
