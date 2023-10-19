import { BERITA_DUMMY } from "@/utils/data";

const getDetailBerita = (id: string): Berita => {
  const berita = BERITA_DUMMY.find((item: Berita) => item.id === id);
  return berita as Berita;
};

const getBerita = async (id: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/berita`,
      { next: { revalidate: 0 } }
    );
    const data = await response.json();
    if (!response.ok) throw Error(data.message);
    const berita: Berita[] = data.data;
    const detailBerita = berita.find((item: Berita) => item.id === id);
    return detailBerita;
  } catch (error) {
    return null;
  }
};

const getAllBerita = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/berita`,
      { next: { revalidate: 0 } }
    );
    const data = await response.json();
    if (!response.ok) throw Error(data.message);
    const berita: Berita[] = data.data;
    return berita;
  } catch (error) {
    return null;
  }
};

export { getDetailBerita, getBerita, getAllBerita };
