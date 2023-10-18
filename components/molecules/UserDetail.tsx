type UserDetailProps = {
  jenisKelamin: string;
  tglLahir: string;
  phone: string;
  address?: string;
};

function UserDetail({
  jenisKelamin,
  tglLahir,
  phone,
  address,
}: UserDetailProps) {
  return (
    <div className="p-[30px] flex flex-col gap-10 rounded-[20px] md:w-[80vw] w-full bg-white">
      <div>
        <p className="md:text-3xl text-2xl font-bold">Jenis Kelamin</p>
        <p className="md:text-2xl text-xl text-black/70 font-semibold">
          {jenisKelamin === "L" ? "Laki-laki" : "Perempuan"}
        </p>
      </div>
      <div>
        <p className="md:text-3xl text-2xl font-bold">Tanggal Lahir</p>
        <p className="md:text-2xl text-xl text-black/70 font-semibold">
          {tglLahir}
        </p>
      </div>
      <div>
        <p className="md:text-3xl text-2xl font-bold">Nomor Handphone</p>
        <p className="md:text-2xl text-xl text-black/70 font-semibold">
          {phone}
        </p>
      </div>
      <div>
        <p className="md:text-3xl text-2xl font-bold">Alamat</p>
        <p className="md:text-2xl text-xl text-black/70 font-semibold md:max-w-[60%]">
          {address ? address : "-"}
        </p>
      </div>
    </div>
  );
}

export default UserDetail;
