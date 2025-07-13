import Image from "next/image";

export default function CompanyTextIntro() {
  return (
    <div className="w-full max-w-[580px] h-[500px] flex flex-col justify-between text-white">
      {/* Üst Başlık */}
      <div>
        <h4 className="text-[16px] md:text-[26px] text-primary">
          # WAWA İÇ MİMARLIK OFİSİ
        </h4>
      </div>

      {/* Ortadaki içerikler */}
      <div className="space-y-4">
        <h3 className="text-[32px] md:text-[47px] text-white tracking-normal leading-tight">
          İç Mimarlık Hizmetleri ve{" "}
          <span className="text-primary font-extrabold tracking-normal">
            Kusursuz Çözümler
          </span>
        </h3>
        <p className="text-white font-bold text-xl">
          Size daha iyi sonuçlar sunmak için 30 yılı aşkın deneyime sahibiz.
        </p>
        <p className="text-sm leading-relaxed text-white/90">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget nisi
          ut ante volutpat venenatis. Phasellus commodo sem et mauris aliquet
          luctus. Quisque leo leo, placerat vel orci et, consectetur mollis
          lectus. Quisque auctor augue sed gravida eleifend. Nunc et accumsan
          erat, et consectetur lectus.
        </p>
      </div>

      {/* CTA Buton */}
      <div>
        <button className="bg-primary text-secondary font-bold px-6 py-4 cursor-pointer hover:bg-primary-light transition flex items-center w-fit text-sm tracking-wide shadow-md">
          <Image
            src="/icons/talepicon.png"
            alt="Daha Fazla Bilgi"
            width={20}
            height={20}
            className="inline-block mr-2"
          />
          <span>BİZİ YAKINDAN TANIYIN!</span>
        </button>
      </div>
    </div>
  );
}
