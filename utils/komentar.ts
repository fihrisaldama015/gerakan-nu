import { Comment } from "@/types/comment";

const getAllKomentar = async (newsId: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/berita/${newsId}/komentar`,
      { next: { revalidate: 0 } }
    );
    const data = await response.json();
    if (!response.ok) throw Error(data.message);
    const komentar: Comment[] = data.data;
    return komentar;
  } catch (error) {
    return null;
  }
};

export { getAllKomentar };
