type Berita = {
  id: number;
  title: string;
  body: string;
  imgUrl: string;
  date: string;
  author: string;
  tags: string[];
};

type User = {
  email: string;
  nama: string;
  jenisKelamin: string;
  phone: string;
  tglLahir: string;
  address?: string;
  pendidikan?: string;
  pekerjaan?: string;
};
