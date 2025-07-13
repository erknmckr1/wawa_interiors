"use client";
import Image from "next/image";
export default function FooterTopBar() {
  return (
    <div className="w-full h-[80px] bg-primary p-2 md:p-0">
      <div className="w-full h-full flex items-center justify-between container mx-auto">
       <p className="text-secondary  font-extrabold text-[16px] md:text-[20px] px-2">
          İç Mimarlık Hizmetleri ve Kusursuz Çözümler
        </p>
        <button className="text-white  cursor-pointer duration-200 transition-all flex items-center justify-center w-[120px] md:w-[140px] h-[50px] bg-secondary hover:bg-secondary-light hover:border-secondary gap-x-2 md:gap-x-4 ">
          <Image
            src={"/icons/teklificon.svg"}
            alt="teklificon"
            width={20}
            height={20}
          />
          <span className="uppercase font font-semibold text-xs lg:text-lg">Teklif Alın</span>
        </button>
      </div>
    </div>
  );
}
