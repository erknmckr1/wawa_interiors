"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
export default function BrandSliderSection() {
  const logos = [
    "/images/brands/philips.png",
    "/images/brands/lg.png",
    "/images/brands/samsung.jpg",
    "/images/brands/ikea.png",
    "/images/brands/philips.png",
    "/images/brands/lg.png",
    "/images/brands/samsung.jpg",
    "/images/brands/ikea.png",
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full px-4 py-6 bg-3A3A61 relative z-1">
      <div className="w-full flex">
        {/* Sol başlık kısmı */}

        <div className="w-1/3 md:w-1/4  space-y-2 ">
          <div className="space-y-2">
            <p className="text-primary text-sm md:text-xl font-medium">
              Referanslarımız
            </p>
            <h2 className="text-white text-sm md:text-[25px] ">
              Markalarımızla Tanışın!
            </h2>
          </div>
          {/* Sağ butonlar */}
          {/* Sağ butonlar */}
          <div className="flex items-center gap-3 pt-2">
            <button
              ref={prevRef}
              className="w-10 h-10 flex items-center justify-center bg-313159 text-white hover:bg-primary transition "
            >
              <ArrowLeft size={20} />
            </button>
            <button
              ref={nextRef}
              className="w-12 md:w-16 h-10 flex items-center justify-center bg-313159 text-white hover:bg-primary transition "
            >
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="absolute inset-0 w-1/3 md:w-1/4 h-full border-r border-[#333354] z-0 pointer-events-none"></div>
        </div>

        {/* Sağ Slider */}
        <div className="w-2/4 md:w-3/4 pl-4 overflow-hidden">
          <Swiper
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              if (
                swiper.params.navigation &&
                typeof swiper.params.navigation !== "boolean"
              ) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            slidesPerView="auto"
            spaceBetween={40}
            className="h-full"
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index} className="!w-auto flex items-center">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  src={logo}
                  alt={`Brand ${index}`}
                  className="w-auto max-h-[150px] opacity-60 hover:opacity-100 transition"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
