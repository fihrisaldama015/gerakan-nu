import Breadcrumbs from "@/components/molecules/Breadcrumbs";
import NewsCard from "@/components/molecules/NewsCard";
import { getAllBerita } from "@/utils/berita";

async function BeritaPage() {
  const berita = await getAllBerita();
  if (!berita) return null;
  return (
    <section className="p-10 flex flex-col gap-7">
      <Breadcrumbs title="" />
      {berita.slice(0, 1).map((berita: Berita, index: number) => (
        <NewsCard
          key={index}
          index={berita.id}
          dokumentasi={berita.dokumentasi}
          date={new Date(berita.date).toLocaleDateString("id-ID", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          description={berita.body}
          title={berita.title}
          horizontal={true}
        />
      ))}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {berita.slice(1, berita.length).map((berita: Berita, index: number) => (
          <NewsCard
            key={index}
            index={berita.id}
            dokumentasi={berita.dokumentasi}
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
    </section>
  );
}

export default BeritaPage;
