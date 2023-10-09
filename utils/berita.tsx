import { BERITA_DUMMY } from "@/utils/data";

const getDetailBerita = (id: number): Berita => {
  const berita = BERITA_DUMMY.find((item: Berita) => item.id === id);
  return berita as Berita;
};

export { getDetailBerita };
