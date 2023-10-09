import Link from "next/link";
import { BERITA_DUMMY } from "../utils/data";
import NewsCard from "./molecules/NewsCard";

function Berita() {
  return (
    <section className="p-[30px] w-full flex flex-col gap-[30px] items-center justify-center">
      <h1 className="mb-7 text-center text-5xl font-semibold">
        Berita Terbaru
      </h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {BERITA_DUMMY.map((berita: Berita, index: number) => (
          <NewsCard
            key={index}
            index={berita.id}
            imgUrl="/PostImage.png"
            date="10-07-2023"
            title="Anies Baswedan Bersama Muhaimin Iskandar resmi jadi Paslon Presiden
          Pada periode 2024 - 2029"
          />
        ))}
      </div>
      <Link href="">
        <button className="mt-8 py-5 px-8 ring-[#7FB069] ring-2 text-[#7FB069] text-3xl font-semibold">
          LIHAT SEMUA BERITA
        </button>
      </Link>
    </section>
  );
}

export default Berita;
