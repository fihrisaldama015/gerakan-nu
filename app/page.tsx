import Berita from "@/components/Berita";
import Hero from "@/components/Hero";
import Layanan from "@/components/Layanan";
import Live from "@/components/Live";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Layanan />
      <Berita />
      <Live />
    </main>
  );
}
