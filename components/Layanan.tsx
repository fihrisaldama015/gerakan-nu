import Image from "next/image";

function Layanan() {
  return (
    <section className="pt-16 pb-20 px-12 flex flex-row flex-wrap justify-center w-fit md:gap-24 gap-12">
      <div className="p-2.5 flex gap-4 ring-blue_primary ring-2 rounded-3xl">
        <Image src="/layanan_1.svg" width={80} height={80} alt="Layanan" />
        <div className="max-w-[15rem]">
          <h1 className="text-lg font-semibold">
            Layanan Informasi dan Dukungan
          </h1>
          <p className="mt-3 text-xs">
            Informasi, pertanyaan, dan dukungan terkait PasLon Anies-Muhaimin
          </p>
        </div>
      </div>
      <div className="p-2.5 flex gap-4 ring-blue_primary ring-2 rounded-3xl">
        <Image src="/layanan_2.svg" width={80} height={80} alt="Layanan" />
        <div className="max-w-[15rem]">
          <h1 className="text-lg font-semibold">
            Layanan Informasi dan Dukungan
          </h1>
          <p className="mt-3 text-xs">
            Informasi, pertanyaan, dan dukungan terkait PasLon Anies-Muhaimin
          </p>
        </div>
      </div>
      <div className="p-2.5 flex gap-4 ring-blue_primary ring-2 rounded-3xl">
        <Image src="/layanan_3.svg" width={80} height={80} alt="Layanan" />
        <div className="max-w-[15rem]">
          <h1 className="text-lg font-semibold">
            Layanan Informasi dan Dukungan
          </h1>
          <p className="mt-3 text-xs">
            Informasi, pertanyaan, dan dukungan terkait PasLon Anies-Muhaimin
          </p>
        </div>
      </div>
    </section>
  );
}

export default Layanan;
