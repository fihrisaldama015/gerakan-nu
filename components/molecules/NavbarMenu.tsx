"use client";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCookies } from "react-cookie";

function NavbarMenu({ isLogin }: { isLogin?: boolean }) {
  const pathname = usePathname();
  const [cookie, setCookie, removeCookie] = useCookies(["accessToken"]);

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

  if (pathname.split("/")[1] === "admin") {
    return (
      <div className="flex gap-3">
        <Link href="/admin/berita/add">
          <button
            className="py-1.5 px-4 flex items-center gap-3 font-semibold bg-blue_primary rounded-[20px] text-white"
            tabIndex={-1}
          >
            <Image src="/icons/add.svg" width={16} height={16} alt="add" />
            Berita
          </button>
        </Link>
        <button
          type="button"
          onClick={Logout}
          className="py-1.5 px-4 font-semibold bg-[#c30000] rounded-[20px] text-white cursor-pointer"
        >
          Log Out
        </button>
      </div>
    );
  }
  if (!isLogin) {
    return (
      <div className="flex gap-3">
        <Link href="/login">
          <button className="py-1.5 px-4 rounded-lg bg-green_primary font-semibold text-white">
            Login
          </button>
        </Link>
        <Link href="/register">
          <button className="py-1.5 px-4 rounded-lg bg-blue_primary font-semibold text-white">
            Daftar
          </button>
        </Link>
      </div>
    );
  }

  return <Image src="/icons/search.svg" alt="search" width={20} height={20} />;
}

export default NavbarMenu;
