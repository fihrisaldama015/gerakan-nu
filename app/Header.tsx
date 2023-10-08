import NavbarDropdown from "@/components/NavbarDropdown";
import Image from "next/image";

function Header() {
  return (
    <header className="py-4 px-10 flex justify-between">
      <Image
        src="/logo_navbar.svg"
        height={180}
        width={180}
        alt="logo GNB"
        className="w-[180px] h-auto object-contain"
        priority
        quality={50}
      />
      <div className="flex gap-4 items-center">
        <NavbarDropdown />
        <button className="py-1.5 px-4 rounded-lg bg-green_primary font-semibold text-white">
          Login
        </button>
        <button className="py-1.5 px-4 rounded-lg bg-blue_primary font-semibold text-white">
          Daftar
        </button>
      </div>
    </header>
  );
}

export default Header;
