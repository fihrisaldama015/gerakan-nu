import Image from "next/image";
import Link from "next/link";
import ProfileDots from "./ProfileDots";

type ProfileCardProps = { name: string; email: string };

function ProfileCard({ name, email }: ProfileCardProps) {
  return (
    <div className="p-[30px] rounded-[20px] md:w-[80vw] w-full bg-white">
      <div className="mb-16 w-full flex items-center justify-between">
        <Link
          href="/"
          className="min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
        >
          <Image
            src="/icons/arrow_left.svg"
            alt="arrow"
            width={30}
            height={30}
            className="w-auto md:h-6 h-4 cursor-pointer"
          />
        </Link>
        <h1 className="font-bold md:text-4xl text-2xl">Profil Saya</h1>
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
        <h1 className="md:text-3xl text-2xl font-bold text-center">{name}</h1>
        <div className="mb-20 text-center">
          <p className="text-xl font-semibold text-black/70">Email</p>
          <p className="md:text-xl text-lg text-black/70">{email}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
