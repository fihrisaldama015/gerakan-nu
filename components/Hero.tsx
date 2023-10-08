import Image from "next/image";
import Background from "@/public/home_hero.webp";

function Hero() {
  return (
    <div className="bg-red-300">
      <Image
        src={Background}
        width={1440}
        height={810}
        alt="Hero"
        className="h-auto w-screen object-contain"
        sizes="{(max-width: 768px) 768px, (max-width: 1440px) 1440px, 100vw}"
        priority
        placeholder="blur"
        quality={100}
      />
    </div>
  );
}

export default Hero;
