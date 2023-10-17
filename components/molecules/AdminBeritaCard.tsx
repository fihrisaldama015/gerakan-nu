import Image from "next/image";
import React from "react";

function AdminBeritaCard({ berita }: { berita: Berita }) {
  return (
    <div className="p-[20px] w-full flex md:flex-row flex-col gap-7 rounded-[30px] bg-slate-200">
      <div className="flex-shrink-0 flex justify-center">
        <Image
          src="/PostImage.png"
          width={300}
          height={300}
          alt="post"
          className="w-[300px] h-auto object-contain rounded-[20px]"
        />
      </div>
      <div className="w-full flex lg:flex-row flex-col justify-between gap-7">
        <div className="flex flex-col justify-between">
          <h2 className="text-[28px] font-semibold truncate lg:w-96 md:w-80 w-full">
            {berita.title}
          </h2>
          <p className="text-lg font-semibold">Penulis: {berita.author}</p>
          <p>{berita.date}</p>
          <span>10 Like, 02 Dislike & 4 Comment</span>
        </div>
        <div className="flex lg:flex-col flex-row lg:justify-center md:justify-start justify-center items-stretch gap-7">
          <button className="py-2.5 px-5 flex gap-4 text-[22px] font-semibold bg-blue_primary rounded-[10px] text-white">
            <Image src="/icons/edit.svg" width={30} height={35} alt="edit" />
            Edit
          </button>
          <button className="py-2.5 px-5 flex gap-4 text-[22px] font-semibold bg-[#B60000] rounded-[10px] text-white">
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
