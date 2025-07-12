// components/hero/HeroServices.tsx
import Image from "next/image";
import HeroRequest from "./HeroRequest";
import ServiceCard from "./ServiceCard";

const HeroServices = () => {
  return (
    <div className=" h-[243px] w-full md:w-auto z-10 absolute right-0 md:bottom-0  bg-dark-blue">
      <div className="absolute -top-5 right-0 md:right-5 z-10 bg-primary hover:bg-dark-blue transition whitespace-nowrap duration-200 hover:text-white px-4 py-2 text-sm font-medium  flex items-center gap-2 cursor-pointer">
        Tüm Hizmetlerimiz
        <span className="ml-1">→</span>
      </div>
      <div className="  md:w-[740px] h-[243px] absolute right-0 bottom-0  bg-dark-blue text-white  flex">
        <Image
          src="/images/heroreq.png"
          alt=""
          width={61}
          height={70}
          className="absolute top-0 right-0"
        />
        <HeroRequest />

        <div className="flex flex-1">
          {/* Hizmet Kartları */}
          <ServiceCard
            icon="/icons/sci2.png"
            title="İÇ MİMARİ PROJE TASARIM"
            highlight="VE UYGULAMA"
          />
          <ServiceCard
            icon="/icons/sci1.png"
            title="FUAR STANDI TASARIMI"
            highlight="VE UYGULAMA"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroServices;
