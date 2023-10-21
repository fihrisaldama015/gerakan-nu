"use client";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import NavbarDropdown from "../NavbarDropdown";
import NavbarMenu from "./NavbarMenu";

function Navbar({ isLogin }: { isLogin: boolean }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);
  return (
    <div className="flex items-center">
      <Transition
        show={windowWidth > 640 ? true : isDropdownOpen}
        enter="transition-all duration-300"
        enterFrom="-translate-x-96"
        enterTo="translate-x-0"
        leave="transition-all duration-300"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-96"
        className="absolute left-0 top-0 h-screen sm:h-fit sm:relative bg-gradient-to-b from-blue_primary to-white sm:from-white sm:flex flex flex-col gap-4 items-center"
      >
        <div className="p-2.5 sm:hidden flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={685}
            height={184}
            className="sm:hidden w-[120px] h-auto object-contain"
          />
        </div>
        <div className="sm:hidden w-full border border-b-1 border-white/50"></div>
        <div className="p-6 sm:text-slate-900 text-white flex flex-1 flex-col sm:flex-row sm:items-center justify-between">
          <NavbarDropdown isLogin={isLogin} />
          <NavbarMenu isLogin={isLogin} />
        </div>
      </Transition>
      <button
        onClick={() => setIsDropdownOpen((value) => !value)}
        className="sm:hidden cursor-pointer hover:bg-slate-200 rounded-md"
      >
        <Image
          src="/icons/hamburger.svg"
          alt="menu"
          width={16}
          height={16}
          className="w-8 h-auto object-contain"
        />
      </button>
    </div>
  );
}

export default Navbar;
