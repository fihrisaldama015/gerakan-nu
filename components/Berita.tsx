import { getAllBerita } from "@/utils/berita";
import Link from "next/link";
import NewsCard from "./molecules/NewsCard";

async function Berita() {
  const berita = await getAllBerita();
  if (!berita) return null;
  return (
    <section className="p-[30px] w-full flex flex-col gap-[30px] items-center justify-center">
      <h1 className="mb-7 text-center text-5xl font-semibold">
        Berita Terbaru
      </h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {berita.map((berita: Berita, index: number) => (
          <NewsCard
            key={index}
            index={berita.id}
            imgUrl={berita.dokumentasi.url}
            date={new Date(berita.date).toLocaleDateString("id-ID", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            title={berita.title}
          />
        ))}
      </div>
      <Link href="/berita">
        <button className="mt-8 py-5 px-8 ring-[#7FB069] ring-2 text-[#7FB069] text-3xl font-semibold">
          LIHAT SEMUA BERITA
        </button>
      </Link>
    </section>
  );
}

export default Berita;
