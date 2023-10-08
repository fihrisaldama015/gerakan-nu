import Link from "next/link";
import NewsCard from "./molecules/NewsCard";
import Image from "next/image";

function Berita() {
  return (
    <>
      <section className="p-[30px] w-full flex flex-col gap-[30px] items-center justify-center">
        <h1 className="mb-7 text-center text-5xl font-semibold">
          Berita Terbaru
        </h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {BERITA_DUMMY.map((berita, index) => (
            <NewsCard
              key={index}
              index={berita.id}
              imgUrl="/PostImage.png"
              tags="BERITA"
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
      <section className="p-16 flex lg:flex-row flex-col gap-8">
        <Image
          src="/live_report.png"
          width={650}
          height={500}
          alt="live"
          className="h-auto w-auto object-contain"
        />
        <div className="flex flex-col justify-between">
          <h1 className="text-neutral-600 text-2xl font-semibold">
            Trending Video
          </h1>
          <p className="text-3xl text-neutral-950 font-semibold tracking-tight text-justify">
            Deklarasi Anies Baswedan dengan Muhaimin Iskandar Sebagai Pasangan
            Calon Presiden RI Periode 2024 - 2029
          </p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus.
          </p>
          <Link href="">
            <button className="mt-8 py-2.5 px-5 ring-[#7FB069] ring-2 text-[#7FB069] text-lg font-semibold">
              LIHAT LIVE VIDEO
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Berita;

const BERITA_DUMMY = [
  {
    id: 1,
    imgUrl: "/PostImage.png",
    tags: "BERITA",
    date: "10-07-2023",
    title:
      "Anies Baswedan Bersama Muhaimin Iskandar resmi jadi Paslon Presiden Pada periode 2024 - 2029",
  },
  {
    id: 2,
    imgUrl: "/PostImage.png",
    tags: "BERITA",
    date: "10-07-2023",
    title:
      "Anies Baswedan Bersama Muhaimin Iskandar resmi jadi Paslon Presiden Pada periode 2024 - 2029",
  },
  {
    id: 3,
    imgUrl: "/PostImage.png",
    tags: "BERITA",
    date: "10-07-2023",
    title:
      "Anies Baswedan Bersama Muhaimin Iskandar resmi jadi Paslon Presiden Pada periode 2024 - 2029",
  },
  {
    id: 4,
    imgUrl: "/PostImage.png",
    tags: "BERITA",
    date: "10-07-2023",
    title:
      "Anies Baswedan Bersama Muhaimin Iskandar resmi jadi Paslon Presiden Pada periode 2024 - 2029",
  },
  {
    id: 5,
    imgUrl: "/PostImage.png",
    tags: "BERITA",
    date: "10-07-2023",
    title:
      "Anies Baswedan Bersama Muhaimin Iskandar resmi jadi Paslon Presiden Pada periode 2024 - 2029",
  },
  {
    id: 6,
    imgUrl: "/PostImage.png",
    tags: "BERITA",
    date: "10-07-2023",
    title:
      "Anies Baswedan Bersama Muhaimin Iskandar resmi jadi Paslon Presiden Pada periode 2024 - 2029",
  },
];
