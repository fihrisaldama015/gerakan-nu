import NavbarDropdown from "@/components/NavbarDropdown";
import NavbarMenu from "@/components/molecules/NavbarMenu";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="fixed bg-white w-screen h-[6rem] shadow-md py-4 px-10 flex justify-between">
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
      <div className="flex gap-4 items-center">
        <NavbarDropdown />
        <NavbarMenu />
      </div>
    </header>
  );
}

export default Header;
