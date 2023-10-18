"use client";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCookies } from "react-cookie";

function ProfileDots() {
  const [open, setOpen] = useState<boolean>(false);
  const [cookie, setCookie, removeCookie] = useCookies(["accessToken"]);

  const router = useRouter();

  const Logout = () => {
    signOut(auth)
      .then(() => {
        alert("Logout Berhasil");
        removeCookie("accessToken");
        location.href = "/";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-screen h-screen bg-black/30 ${
          open ? "" : "hidden"
        }`}
      ></div>
      <div
        onClick={() => setOpen((value) => !value)}
        className="min-w-[44px] min-h-[44px] relative flex items-center justify-center cursor-pointer"
      >
        <Image
          src="/icons/dots.svg"
          alt="dots"
          width={10}
          height={42}
          className="w-auto md:h-6 h-4 cursor-pointer"
        />
        <div
          className={`absolute p-2.5 font-medium w-max flex flex-col gap-2.5 bg-white top-6 right-8 shadow-md rounded-[10px] ${
            open ? "" : "hidden"
          }`}
        >
          <div className="p-2.5 hover:text-blue_primary">Ubah Profil</div>
          <div className="p-2.5 hover:text-blue_primary">Ganti Password</div>
          <div className="p-2.5 hover:text-blue_primary">Hapus Akun</div>
          <div onClick={Logout} className="p-2.5 hover:text-blue_primary">
            Log Out
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileDots;
