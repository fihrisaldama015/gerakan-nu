"use client";
import { previewNewsImageURL, uploadNewsImages } from "@/lib/bucket";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

function FormDokumentasiBerita() {
  const dokumentasi = JSON.parse(localStorage.getItem("dokumentasi")!);
  const initialState = [{ keterangan: "", url: "" }];
  const [gambar, setGambar] = useState<StringObject[]>(
    dokumentasi ? dokumentasi : initialState
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleAddBerita = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const data = gambar;
    localStorage.setItem("dokumentasi", JSON.stringify(data));
    setIsLoading(false);
    router.push("/admin/berita/detail");
  };

  const handleAdditionalFile = async (
    e: ChangeEvent<HTMLInputElement>,
    imgId: number
  ): Promise<void> => {
    if (!e.target?.files) return;
    setIsLoading(true);
    const uploadedFile = e.target?.files[0];
    try {
      const res = await uploadNewsImages(uploadedFile);
      const previewURL = previewNewsImageURL(res.$id);
      setGambar((gambar) => {
        return gambar.map((item, id) => {
          if (id === imgId) {
            return { ...item, url: previewURL };
          }
          return item;
        });
      });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      return;
    }
    setIsLoading(false);
  };

  const handleAdditionalField = (value: string, imgId: number): void => {
    setGambar((gambar) => {
      return gambar.map((item, id) => {
        if (id === imgId) {
          return { ...item, keterangan: value };
        }
        return item;
      });
    });
  };

  const tambahDokumentasi = () => {
    setGambar((gambar) => [...gambar, { keterangan: "", url: "" }]);
  };
  return (
    <form
      onSubmit={handleAddBerita}
      className="md:px-20 px-0 flex flex-col gap-7"
    >
      {gambar.map((item, id) => (
        <div key={id}>
          <div className="flex flex-col gap-3">
            <label htmlFor="dokumentasi" className="text-3xl font-bold">
              Dokumentasi {id + 1}
            </label>
            <input
              type="file"
              id="dokumentasi"
              accept=".jpg,.png,.svg,.gif"
              onChange={(e) => handleAdditionalFile(e, id)}
              className="py-4 px-7 ring-1 rounded-[10px] placeholder:font-bold focus:outline-blue_primary"
            />
            {item.url !== "" && (
              <div className="flex flex-col gap-3">
                <p>Preview gambar</p>
                <Image
                  src={item.url}
                  alt="dokumentasi"
                  width={400}
                  height={244}
                  className="h-auto w-[600px] object-contain rounded-md"
                />
              </div>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="keterangan" className="text-3xl font-bold">
              Keterangan Gambar
            </label>
            <input
              type="text"
              id="penulis"
              placeholder="Tuliskan Nama Penulis Disini"
              value={item.keterangan}
              onChange={(e) => handleAdditionalField(e.target.value, id)}
              className="py-4 px-7 ring-1 rounded-[10px] placeholder:font-bold focus:outline-blue_primary"
            />
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={tambahDokumentasi}
        className="relative py-3 px-5 w-full text-2xl font-bold text-white bg-green_primary rounded-[20px] hover:brightness-110 transition-all"
      >
        <Image
          src="/icons/add.svg"
          alt="next"
          width={30}
          height={30}
          className="absolute left-4"
        />
        Tambahkan Gambar Lainnya
      </button>
      <div className="flex gap-5">
        <Link href="/admin/berita/add" className="flex flex-1">
          <button
            type="button"
            className="py-3 px-5 w-full flex items-center justify-between gap-3 text-2xl font-bold text-white bg-[#B60000] rounded-[20px] hover:brightness-110 transition-all"
          >
            <Image
              src="/icons/next.svg"
              alt="next"
              width={30}
              height={30}
              className="rotate-180"
            />
            Sebelumnya
          </button>
        </Link>
        <button
          type="submit"
          disabled={isLoading}
          className="py-3 px-5 flex flex-1 justify-between items-center gap-3 text-2xl font-bold text-white bg-blue_primary rounded-[20px] hover:brightness-110 transition-all disabled:cursor-not-allowed disabled:bg-slate-500"
        >
          Selanjutnya
          <Image
            src="/icons/next.svg"
            alt="next"
            width={30}
            height={30}
            className=""
          />
        </button>
      </div>
    </form>
  );
}

export default FormDokumentasiBerita;
