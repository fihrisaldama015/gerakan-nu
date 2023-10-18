import Breadcrumbs from "@/components/molecules/Breadcrumbs";
import NewsCard from "@/components/molecules/NewsCard";
import { BERITA_DUMMY } from "@/utils/data";

function BeritaPage() {
  return (
    <section className="p-10 flex flex-col gap-7">
      <Breadcrumbs title="" />
      {BERITA_DUMMY.slice(0, 1).map((berita: Berita, index: number) => (
        <NewsCard
          key={index}
          index={berita.id}
          imgUrl="/PostImage.png"
          date="10-07-2023"
          description={berita.body}
          title="Anies Baswedan Bersama Muhaimin Iskandar resmi jadi Paslon Presiden
          Pada periode 2024 - 2029"
          horizontal={true}
        />
      ))}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {BERITA_DUMMY.slice(1, BERITA_DUMMY.length).map(
          (berita: Berita, index: number) => (
            <NewsCard
              key={index}
              index={berita.id}
              imgUrl="/PostImage.png"
              date="10-07-2023"
              title="Anies Baswedan Bersama Muhaimin Iskandar resmi jadi Paslon Presiden
          Pada periode 2024 - 2029"
            />
          )
        )}
      </div>
    </section>
  );
}

export default BeritaPage;
