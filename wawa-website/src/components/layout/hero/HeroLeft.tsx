import Image from "next/image";
const HeroLeft = () => {
  return (
    <div className="text-white sm:p-0 p-4 w-full mt-6 sm:mt-0 flex flex-col gap-6 max-w-xl relative">
      {/* Başlık Üstü */}
      <div className="flex  flex-wrap items-center gap-4 text-sm font-bold tracking-wider">
        <span className="text-primary">01</span>
        <div className="h-[2px] w-10 bg-primary" />
        <span className="text-white">HOŞGELDİNİZ!</span>
      </div>

      {/* Başlık */}
      <h1 className=" text-2xl sm:text-4xl md:text-[70px] font-bold tracking-wider md:whitespace-nowrap leading-tight">
        İç Mimarlık Alanında
      </h1>
      <h2 className="text-3xl sm:text-5xl lg:text-[90px] font-heading tracking-wider  md:whitespace-nowrap font-extrabold text-primary leading-tight">
        KUSURSUZ ÇÖZÜMLER.
      </h2>

      {/* Açıklama */}
      <p className="text-gray-light text-sm md:text-lg leading-relaxed">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua.
      </p>

      {/* Butonlar */}
      <div className="flex  sm:flex-row items-center gap-4 mt-4 justify-center lg:justify-start">
        <button className="bg-primary text-black px-6 py-3  font-semibold flex items-center gap-2">
          <Image
            src="/icons/hero4.png"
            alt="hero icon"
            width={24}
            height={24}
          />{" "}
          Bizi Tanıyın!
        </button>
        <button className="border border-white px-6 py-3  font-semibold">
          Tanıtım Videomuz
        </button>
      </div>
    </div>
  );
};

export default HeroLeft;
