import ProfileDots from "@/components/molecules/ProfileDots";
import Image from "next/image";

function Profile() {
  return (
    <section className="min-h-screen pt-20 flex flex-col gap-10 items-center justify-center bg-slate-200">
      <div className="p-[30px] rounded-[20px] md:w-[80vw] w-full bg-white">
        <div className="mb-16 flex w-full justify-between">
          <Image
            src="/icons/arrow_left.svg"
            alt="arrow"
            width={30}
            height={30}
          />
          <h1 className="font-bold text-4xl">Profil Saya</h1>
          <ProfileDots />
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <Image
            src="/icons/avatar.svg"
            width={200}
            height={200}
            alt="avatar"
            className="w-[200px] h-auto object-contain"
          />
          <h1 className="text-3xl font-bold">Mas Muhammad Aqil Salim</h1>
          <div className="mb-20 text-center">
            <p className="text-xl font-semibold text-black/70">Email</p>
            <p className="text-xl text-black/70">aqilsalimm123@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="p-[30px] rounded-[20px] md:w-[80vw] w-full bg-white">
        <p className="mb-10 text-3xl font-bold text-blue_primary">
          Ubah Profil
        </p>
        <p className="text-3xl font-bold text-blue_primary">Ganti Password</p>
      </div>

      <div className="p-[30px] flex flex-col gap-10 rounded-[20px] md:w-[80vw] w-full bg-white">
        <div>
          <p className="text-3xl font-bold">Jenis Kelamin</p>
          <p className="text-3xl text-black/70 font-semibold">Laki-Laki</p>
        </div>
        <div>
          <p className="text-3xl font-bold">Tanggal Lahir</p>
          <p className="text-3xl text-black/70 font-semibold">16-11-2003</p>
        </div>
        <div>
          <p className="text-3xl font-bold">Nomor Handphone</p>
          <p className="text-3xl text-black/70 font-semibold">089619374255</p>
        </div>
        <div>
          <p className="text-3xl font-bold">Alamat</p>
          <p className="text-3xl text-black/70 font-semibold md:max-w-[60%]">
            Gedongan 9 RT.06 RW.01 Wadungasri, Waru Sidoarjo, Jawa Timur Kode
            Pos 61256
          </p>
        </div>
      </div>
      <div className="p-[30px] flex flex-col gap-10 rounded-[20px] md:w-[80vw] w-full bg-white">
        <div className="flex justify-between">
          <div>
            <p className="text-3xl font-bold">Pendidikan Terakhir</p>
            <p className="text-3xl text-black/70 font-semibold">-</p>
          </div>
          <Image src="/icons/edit_blue.svg" width={40} height={40} alt="edit" />
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-3xl font-bold">Pekerjaan</p>
            <p className="text-3xl text-black/70 font-semibold">-</p>
          </div>
          <Image src="/icons/edit_blue.svg" width={40} height={40} alt="edit" />
        </div>
      </div>
      <Image
        src="/city.svg"
        alt="city"
        width={1440}
        height={470}
        className="w-screen h-auto object-cover"
      />
    </section>
  );
}

export default Profile;
