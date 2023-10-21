import Image from "next/image";
import Link from "next/link";
import { inter } from "@/fonts";

function Footer() {
  return (
    <footer className="p-[30px] bg-blue_primary text-white">
      <div className="mb-36 flex lg:flex-row flex-col justify-between items-center md:gap-0 gap-16">
        <Image
          src="/logo.svg"
          width={685}
          height={184}
          alt="logo"
          className="h-auto w-[400px] object-contain"
        />
        <div className="sm:hidden flex sm:flex-row flex-col items-center justify-center gap-3">
          <p className="font-semibold text-center">
            Silahkan Masuk terlebih Dahulu Untuk mendapatkan Berita Terupdate!!
          </p>
          <Link href="/login">
            <button className="py-1.5 px-4 rounded-lg bg-green_primary font-semibold text-slate-900">
              Daftar/Login
            </button>
          </Link>
        </div>
        <div className="flex justify-center flex-wrap items-center gap-32">
          <div className="flex flex-col gap-4 sm:text-left text-center">
            <h1 className="font-bold">Beranda</h1>
            <Link href="/berita">Berita</Link>
            <Link href="/profile">Profil</Link>
            <Link href="/">Tentang Kami</Link>
          </div>
          <div className="sm:flex hidden flex-col gap-4">
            <h1 className="font-bold">Resources</h1>
            <Link href="/">Blog</Link>
            <Link href="/">Guides & Tutorials</Link>
            <Link href="/">Help Center</Link>
          </div>
          <div className="sm:flex hidden flex-col gap-4">
            <h1 className="font-bold">Company</h1>
            <Link href="/">About Us</Link>
            <Link href="/">Careers</Link>
            <Link href="/">Media Kit</Link>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:justify-between items-center md:gap-0 gap-4 ">
        <div className={`sm:flex hidden gap-[60px] ${inter.className}`}>
          <div className="flex gap-1">
            <Image src="/internet.svg" width={20} height={20} alt="internet" />
            <p>Indonesia</p>
          </div>
          <p>Terms & Privacy</p>
          <p>Security</p>
          <p>Status</p>
        </div>
        <div className="flex gap-8">
          <Image
            src="/Facebook.svg"
            width={9}
            height={18}
            alt="facebook"
            className="w-8 h-8 object-contain"
          />
          <Image
            src="/Twitter.svg"
            width={17}
            height={14}
            alt="twitter"
            className="w-8 h-8 object-contain"
          />
          <Image
            src="/Linkedin.svg"
            width={15}
            height={16}
            alt="linkedin"
            className="w-8 h-8 object-contain"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
