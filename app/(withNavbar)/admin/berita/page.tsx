import ArrowDown from "@/components/atoms/arrow";
import AdminBeritaCard from "@/components/molecules/AdminBeritaCard";
import { BERITA_DUMMY } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";

function BeritaAdmin() {
  return (
    <section>
      <div className="relative border-b-[2rem] border-slate-300 w-full py-40 flex flex-col justify-center items-center">
        <Image
          src="/Element.png"
          alt="Hero"
          width={1440}
          height={810}
          className="absolute -z-10 h-auto w-screen object-contain"
          sizes="{(max-width: 768px) 768px, (max-width: 1440px) 1440px, 100vw}"
          priority
          quality={100}
        />
        <h1 className="text-5xl text-center font-bold">Total Reader Pembaca</h1>
        <Link href="admin/berita/add">
          <button className="py-2.5 px-5 flex gap-3 text-4xl font-bold bg-green_primary rounded-[20px] text-black mt-10">
            10 Pembaca
          </button>
        </Link>
      </div>
      <div className="p-11 border-b-[2rem] border-slate-300">
        <div className="flex justify-between">
          <h1 className="mb-10 text-5xl font-bold">Berita Anda</h1>
          <div className="flex gap-3">
            <div className="flex gap-[10px] items-center">
              <p className="font-semibold">Tanggal</p>
              <ArrowDown stroke="black" />
            </div>
            <div className="flex gap-[10px] items-center">
              <p className="font-semibold">Bulan</p>
              <ArrowDown stroke="black" />
            </div>
            <div className="flex gap-[10px] items-center">
              <p className="font-semibold">Tahun</p>
              <ArrowDown stroke="black" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {BERITA_DUMMY.map((berita: Berita, index) => (
            <AdminBeritaCard key={index} berita={berita} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BeritaAdmin;
