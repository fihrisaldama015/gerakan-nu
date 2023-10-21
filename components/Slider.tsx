"use client";
import Background from "@/public/home_hero.webp";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Slider({ berita }: { berita: Berita[] }) {
  return (
    <section className="w-full">
      <Swiper
        slidesPerView={1}
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        loop
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
        }}
      >
        <SwiperSlide>
          <Image
            src={Background}
            width={1440}
            height={810}
            alt="Hero"
            className="h-auto w-screen object-contain"
            sizes="{(max-width: 768px) 768px, (max-width: 1440px) 1440px, 100vw}"
            priority
            placeholder="blur"
            quality={100}
          />
        </SwiperSlide>
        {berita?.slice(0, 4).map((berita: Berita, index: number) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <Image
                src={berita.dokumentasi ? berita.dokumentasi[0].url : ""}
                width={1440}
                height={810}
                alt="Hero"
                className="h-auto w-full object-cover brightness-90"
                sizes="{(max-width: 768px) 768px, (max-width: 1440px) 1440px, 100vw}"
                priority
                quality={100}
              />

              <span className="text-xs w-full absolute text-center bottom-8 text-black drop-shadow-md font-medium">
                {berita.title}
              </span>
              <Link
                href={`/berita/${berita.id}`}
                className="absolute top-[calc(50%-1.5rem)] left-[calc(50%-4.5rem)] flex justify-center items-center px-3 w-36 h-12 rounded-md shadow-md bg-white text-slate-900 text-xl font-semibold hover:text-blue_primary transition-colors duration-300 ease-in-out"
              >
                Lihat Berita
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Slider;
