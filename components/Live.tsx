import Image from "next/image";
import Link from "next/link";

function Live() {
  return (
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
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus.
        </p>
        <Link href="">
          <button className="mt-8 py-2.5 px-5 ring-[#7FB069] ring-2 text-[#7FB069] text-lg font-semibold">
            LIHAT LIVE VIDEO
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Live;
