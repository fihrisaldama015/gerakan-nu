import Hero from "@/components/Hero";
import ArrowDown from "@/components/atoms/arrow";
import AdminBeritaCard from "@/components/molecules/AdminBeritaCard";
import { getAllBerita } from "@/utils/berita";

async function BeritaAdmin() {
  const berita = await getAllBerita();
  if (!berita) return null;

  return (
    <section>
      <Hero page="admin" />
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
          {berita.map((berita: Berita, index) => (
            <AdminBeritaCard key={index} berita={berita} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BeritaAdmin;
