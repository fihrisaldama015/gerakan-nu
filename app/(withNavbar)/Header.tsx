import Navbar from "@/components/molecules/Navbar";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const accessToken = cookies().get("accessToken")!;
  return (
    <header className="fixed z-50 bg-white w-screen h-[6rem] shadow-md py-4 px-10 flex justify-between">
      <Link href="/">
        <Image
          src="/logo_navbar.svg"
          height={180}
          width={180}
          alt="logo GNB"
          className="w-[180px] h-auto object-contain"
          priority
          quality={50}
        />
      </Link>
      <Navbar isLogin={accessToken !== undefined} />
    </header>
  );
}

export default Header;
