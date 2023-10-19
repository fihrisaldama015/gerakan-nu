type Berita = {
  id: string;
  title: string;
  body: string;
  dokumentasi: {
    keterangan: string;
    url: string;
  };
  date: string;
  author: string;
  city?: string;
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

interface StringObject {
  [key: string]: string;
}
