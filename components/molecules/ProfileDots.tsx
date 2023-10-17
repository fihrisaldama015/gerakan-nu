"use client";
import Image from "next/image";
import { useState } from "react";

function ProfileDots() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-screen h-screen bg-black/30 ${
          open ? "" : "hidden"
        }`}
      ></div>
      <div
        onClick={() => setOpen((value) => !value)}
        className="relative cursor-pointer"
      >
        <Image src="/icons/dots.svg" alt="dots" width={10} height={42} />
        <div
          className={`absolute p-2.5 font-medium w-max flex flex-col gap-2.5 bg-white top-6 right-4 shadow-md rounded-[10px] ${
            open ? "" : "hidden"
          }`}
        >
          <div className="p-2.5">Ubah Profil</div>
          <div className="p-2.5">Ganti Password</div>
          <div className="p-2.5">Hapus Akun</div>
          <div className="p-2.5">Log Out</div>
        </div>
      </div>
    </>
  );
}

export default ProfileDots;
