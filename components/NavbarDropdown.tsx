"use client";
import { usePathname } from "next/navigation";
import ArrowDown from "./atoms/arrow";
import Link from "next/link";

function NavbarDropdown() {
  const pathname = usePathname();
  console.log(pathname.split("/")[1]);
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

  return (
    <ul className="flex gap-8 mr-4 text-lg font-semibold">
      <li className="flex gap-[10px] items-center">
        <p>Event</p>
        <ArrowDown stroke="black" />
      </li>
      <li className="flex gap-[10px] items-center">
        <p>Berita</p>
        <ArrowDown stroke="black" />
      </li>
    </ul>
  );
}

export default NavbarDropdown;
