"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import ArrowDown from "./atoms/arrow";

function NavbarDropdown({ isLogin }: { isLogin?: boolean }) {
  const pathname = usePathname();
  if (pathname.split("/")[1] === "admin") {
    return (
      <ul className="flex gap-8 mr-4 text-lg font-semibold">
        <Link href="/admin">
          <li className="flex gap-[10px] items-center">
            <p
              className={`${pathname === "/admin" ? "text-blue_primary" : ""}`}
            >
              Beranda
            </p>
          </li>
        </Link>
        <Link href="/admin/berita">
          <li className="flex gap-[10px] items-center">
            <p
              className={`${
                pathname === "/admin/berita" ? "text-blue_primary" : ""
              }`}
            >
              Berita
            </p>
          </li>
        </Link>
        <li className="flex gap-[10px] items-center">
          <p>Notifikasi</p>
          <ArrowDown stroke="black" />
        </li>
      </ul>
    );
  }

  if (!isLogin) {
    return (
      <ul className="flex gap-8 mr-4 text-lg font-semibold">
        <li className="flex gap-[10px] items-center">
          <p>Event</p>
          <ArrowDown stroke="black" />
        </li>
        <Link href="/berita">
          <li className="flex gap-[10px] items-center">
            <p
              className={`${pathname === "/berita" ? "text-blue_primary" : ""}`}
            >
              Berita
            </p>
            <ArrowDown stroke="black" />
          </li>
        </Link>
      </ul>
    );
  }

  return (
    <ul className="flex gap-8 mr-4 text-lg font-semibold">
      <Link href="/">
        <li className="flex gap-[10px] items-center">
          <p className={`${pathname === "/" ? "text-blue_primary" : ""}`}>
            Beranda
          </p>
        </li>
      </Link>
      <Link href="/berita">
        <li className="flex gap-[10px] items-center">
          <p className={`${pathname === "/berita" ? "text-blue_primary" : ""}`}>
            Berita
          </p>
          <ArrowDown stroke="black" />
        </li>
      </Link>
      <li className="flex gap-[10px] items-center">
        <p>Notifikasi</p>
        <ArrowDown stroke="black" />
      </li>
      <Link href="/profile">
        <li className="flex gap-[10px] items-center">
          <p
            className={`${pathname === "/profile" ? "text-blue_primary" : ""}`}
          >
            Profil
          </p>
          <ArrowDown stroke="black" />
        </li>
      </Link>
    </ul>
  );
}

export default NavbarDropdown;
