"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavbarMenu() {
  const pathname = usePathname();
  return (
    <>
      {pathname.split("/")[1] === "admin" ? (
        <Link href="admin/berita/add">
          <button className="py-1.5 px-4 flex items-center gap-3 font-semibold bg-blue_primary rounded-[20px] text-white">
            <Image src="/icons/add.svg" width={16} height={16} alt="add" />
            Berita
          </button>
        </Link>
      ) : (
        <>
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
        </>
      )}
    </>
  );
}

export default NavbarMenu;
