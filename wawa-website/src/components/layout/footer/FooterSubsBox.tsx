'use client'
import Image from "next/image";

export default function FooterSubsBox() {
  return (
    <div className="space-y-6">
      {/* Başlık */}
      <h4 className="font-bold md:text-right text-white text-lg  md:text-xl">Abone Olun!</h4>

      {/* Açıklama */}
      <p className="text-sm text-white mb-4">
        En yeni özellik sürümlerimiz olan mermer gezimine ile döngüde kalmak
        için posta listemize katılın.
      </p>

      {/* Form alanı */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // Buraya abone olma işlemini entegre edebilirsin
        }}
        className="flex flex-col sm:flex-row items-center gap-2"
      >
        {/* Input container */}
        <div className="flex items-center gap-2 bg-dark-blue-light px-3 py-2  w-full">
          <Image
            src="/icons/mail.svg" // yoksa search veya başka ikon kullanılır
            alt="Mail Icon"
            width={16}
            height={16}
          />
          <input
            type="email"
            placeholder="Mail Adres"
            className="bg-transparent placeholder-sub-color outline-none text-sm text-white  w-full"
            required
          />
          {/* Gönder butonu */}
        <button
          type="submit"
          className="bg-primary cursor-pointer hover:bg-primary-light text-secondary px-4 py-2  text-sm font-bold w-full sm:w-auto"
        >
          Gönder
        </button>
        </div>

        
      </form>
    </div>
  );
}
