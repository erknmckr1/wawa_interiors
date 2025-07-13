import Image from "next/image";

export default function ContactForm() {
  return (
    <form className="w-full space-y-5">
      {/* İsim & Mail */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* İsim */}
        <div className="flex w-full h-16 bg-input-color ">
          <div className="w-14 h-full border-r border-input-color flex justify-center items-center">
            <Image
              src="/icons/formicons/user.svg"
              alt="İsim"
              width={20}
              height={20}
            />
          </div>
          <input
            type="text"
            placeholder="İsim & Soyisim"
            className="bg-transparent w-full outline-none px-4 text-sm placeholder:text-sub-color"
          />
        </div>

        {/* Mail */}
        <div className="flex w-full h-16 bg-input-color">
          <div className="w-14 h-full border-r border-input-color flex justify-center items-center">
            <Image
              src="/icons/formicons/mail.svg"
              alt="Mail"
              width={20}
              height={20}
            />
          </div>
          <input
            type="email"
            placeholder="Mail Adresiniz"
            className="bg-transparent w-full outline-none px-4 text-sm placeholder:text-sub-color"
          />
        </div>
      </div>

      {/* Konu */}
      <div className="flex w-full h-16 bg-input-color">
        <div className="w-14 h-full border-r border-input-color flex justify-center items-center">
          <Image
            src="/icons/formicons/app.svg"
            alt="Konu"
            width={20}
            height={20}
          />
        </div>
        <select
          defaultValue=""
          className="bg-transparent w-full outline-none px-4 text-sm text-sub-color appearance-none"
        >
          <option value="" disabled>
            Mesaj Konusu
          </option>
          <option value="teklif">Teklif Talebi</option>
          <option value="proje">Proje Bilgisi</option>
          <option value="randevu">Randevu Talebi</option>
          <option value="diger">Diğer</option>
        </select>
      </div>

      {/* Mesaj Alanı */}
      <div className="flex bg-input-color  w-full min-h-[160px]">
        <div className="w-14 border-r border-input-color flex justify-center items-start pt-4">
          <Image
            src="/icons/formicons/chat.svg"
            alt="Mesaj"
            width={20}
            height={20}
          />
        </div>
        <textarea
          placeholder="Lütfen mesajınızı yazınız..."
          className="bg-transparent w-full outline-none p-4 text-sm text-white placeholder:text-sub-color resize-none"
        />
      </div>
        {/* Gönder Butonu */}
        <button className="w-full h-12 bg-primary hover:bg-primary-light cursor-pointer text-333354-color font-bold">
            MAİLİ GÖNDER
        </button>
    </form>
  );
}
