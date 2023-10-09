import Image from "next/image";
import Link from "next/link";

type BreadcrumbsProps = {
  title: string;
};

function Breadcrumbs({ title }: BreadcrumbsProps) {
  return (
    <div className="flex gap-1">
      <Link href="/" className="text-blue_primary text-base font-semibold">
        Beranda
      </Link>
      <Image
        src="/arrow_down.svg"
        width={11}
        height={6}
        alt="arrow"
        className="stroke-blue_primary -rotate-90"
      />
      <Link
        href="/berita"
        className="text-blue_primary text-base font-semibold"
      >
        Berita
      </Link>
      <Image
        src="/arrow_down.svg"
        width={11}
        height={6}
        alt="arrow"
        className="stroke-blue_primary -rotate-90"
      />
      <p className="text-[#0008] font-semibold">{title}</p>
    </div>
  );
}

export default Breadcrumbs;
