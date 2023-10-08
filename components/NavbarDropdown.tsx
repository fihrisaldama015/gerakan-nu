import Image from "next/image";

function NavbarDropdown() {
  return (
    <ul className="flex gap-8 mr-4 text-lg font-semibold">
      <li className="flex gap-[10px]">
        <p>Event</p>
        <ArrowDown />
      </li>
      <li className="flex gap-[10px]">
        <p>Berita</p>
        <ArrowDown />
      </li>
      <li className="flex gap-[10px]">
        <p>Tentang Kami</p>
        <ArrowDown />
      </li>
    </ul>
  );
}

const ArrowDown = () => {
  return (
    <Image
      src="/arrow_down.svg"
      height={6}
      width={11}
      alt="arrow_down"
      quality={50}
      className="h-auto w-auto object-contain"
    />
  );
};

export default NavbarDropdown;
