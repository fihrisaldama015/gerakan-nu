import Berita from "@/components/Berita";
import Hero from "@/components/Hero";
import Layanan from "@/components/Layanan";
import Live from "@/components/Live";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero page="home" />
      <Layanan />
      <Berita />
      <Live />
    </main>
  );
}
