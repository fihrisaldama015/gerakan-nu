import ProfileCard from "@/components/molecules/ProfileCard";
import UserDetail from "@/components/molecules/UserDetail";
import { getUserData } from "@/utils/user";
import Image from "next/image";

async function Profile() {
  const { data: user }: { data: User } = await getUserData();

  return (
    <>
      <section className="p-6 min-h-screen pt-20 flex flex-col gap-10 items-center justify-center bg-slate-200">
        <ProfileCard name={user?.nama} email={user?.email} />
        <div className="p-[30px] rounded-[20px] md:w-[80vw] w-full bg-white">
          <p className="mb-10 md:text-3xl text-2xl font-bold text-blue_primary">
            Ubah Profil
          </p>
          <p className="md:text-3xl text-2xl font-bold text-blue_primary">
            Ganti Password
          </p>
        </div>
        <UserDetail
          jenisKelamin={user?.jenisKelamin}
          phone={user?.phone}
          tglLahir={user?.tglLahir}
          address={user?.address}
        />
        <div className="p-[30px] flex flex-col gap-10 rounded-[20px] md:w-[80vw] w-full bg-white">
          <div className="flex justify-between">
            <div>
              <p className="md:text-3xl text-2xl font-bold">
                Pendidikan Terakhir
              </p>
              <p className="md:text-3xl text-2xl text-black/70 font-semibold">
                {user?.pendidikan ? user?.pendidikan : "-"}
              </p>
            </div>
            <Image
              src="/icons/edit_blue.svg"
              width={40}
              height={40}
              alt="edit"
            />
          </div>
          <div className="flex justify-between">
            <div>
              <p className="md:text-3xl text-2xl font-bold">Pekerjaan</p>
              <p className="md:text-3xl text-2xl text-black/70 font-semibold">
                {user?.pekerjaan ? user?.pekerjaan : "-"}
              </p>
            </div>
            <Image
              src="/icons/edit_blue.svg"
              width={40}
              height={40}
              alt="edit"
            />
          </div>
        </div>
      </section>
      <Image
        src="/city.svg"
        alt="city"
        width={1440}
        height={470}
        className="w-screen h-auto object-cover bg-slate-200"
      />
    </>
  );
}

export default Profile;
