// components/hero/HeroRequest.tsx
import Image from "next/image";
const HeroRequest = () => {
  return (
    <div className="bg-[#C1DB25] hover:bg-dark-blue transition-colors duration-200 hover:text-primary text-secondary w-2/5 md:w-1/4 h-[243px] flex flex-col items-center justify-center text-center">
      {/* Icon */}
      <div className="flex animate-bounce items-center justify-center  mb-4">
        <Image width={64} height={64}  src="/icons/talepicon.png" alt="" />
      </div>

      {/* Başlık */}
      <div className=" p-4 md:p-0 text-xl md:text-2xl font-extrabold leading-tight uppercase">
        <div>Talep</div>
        <div>Oluştur</div>
      </div>
    </div>
  );
};

export default HeroRequest;
