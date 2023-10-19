"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function AdminBeritaCard({ berita }: { berita: Berita }) {
  const deletePost = async (newsId: string) => {
    if (!window.confirm("Apakah anda yakin ingin menghapus berita ini?")) {
      return;
    }
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/berita/${newsId}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      if (!response.ok) throw Error(data.message);

      alert("Berhasil menghapus berita");
      location.reload();
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="p-[20px] w-full flex md:flex-row flex-col gap-7 rounded-[30px] bg-slate-200">
      <div className="flex-shrink-0 flex justify-center">
        <Link href={`/berita/${berita.id}`}>
          <Image
            src={berita.dokumentasi.url}
            width={300}
            height={300}
            alt="post"
            className="w-[300px] h-auto object-contain rounded-[20px]"
          />
        </Link>
      </div>
      <div className="w-full flex lg:flex-row flex-col justify-between gap-7">
        <Link href={`/berita/${berita.id}`}>
          <div className="flex flex-col justify-between">
            <h2 className="text-[28px] font-semibold truncate lg:w-96 md:w-80 w-full">
              {berita.title}
            </h2>
            <p className="text-lg font-semibold">Penulis: {berita.author}</p>
            <p>
              {new Date(berita.date).toLocaleDateString("id-ID", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <span>10 Like, 02 Dislike & 4 Comment</span>
          </div>
        </Link>
        <div className="flex lg:flex-col flex-row lg:justify-center md:justify-start justify-center items-stretch gap-7">
          <button className="py-2.5 px-5 flex gap-4 text-[22px] font-semibold bg-blue_primary rounded-[10px] text-white">
            <Image src="/icons/edit.svg" width={30} height={35} alt="edit" />
            Edit
          </button>
          <button
            onClick={() => deletePost(berita.id)}
            className="py-2.5 px-5 flex gap-4 text-[22px] font-semibold bg-[#B60000] rounded-[10px] text-white"
          >
            <Image
              src="/icons/delete.svg"
              width={30}
              height={35}
              alt="delete"
            />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminBeritaCard;
