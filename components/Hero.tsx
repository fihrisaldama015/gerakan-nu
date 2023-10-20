import Image from "next/image";
import Background from "@/public/home_hero.webp";
import AdminBackground from "@/public/admin_hero.webp";
import { getAllBerita } from "@/utils/berita";
import Slider from "./Slider";

async function Hero({ page }: { page: "home" | "admin" }) {
  const berita = await getAllBerita();
  if (!berita) return null;

  return (
    <div className="w-full">
      {page === "home" ? (
        <>
          <Slider berita={berita} />
        </>
      ) : page === "admin" ? (
        <Image
          src={AdminBackground}
          width={1440}
          height={810}
          alt="Hero"
          className="h-auto w-screen object-contain"
          sizes="{(max-width: 768px) 768px, (max-width: 1440px) 1440px, 100vw}"
          priority
          placeholder="blur"
          quality={100}
        />
      ) : null}
    </div>
  );
}

export default Hero;
