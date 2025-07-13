import Image from "next/image";
import { MapPin } from "lucide-react";

export default function AddressInfoCard() {
  return (
    <div className="w-full bg-primary text-secondary p-6">
      {/* Başlık */}
      <h3 className="text-lg  mb-2">İletişim Adresimiz</h3>

      {/* Adres */}
      <p className="text-sm font-medium leading-relaxed mb-6">
        Nef12 - Maltepe, Eski Çırpıcı Yolu, 34010<br />
        Zeytinburnu/İstanbul
      </p>

      {/* Butonlar */}
      <div className="flex gap-4 flex-wrap">
        {/* Haritada Göster */}
        <button className="flex items-center gap-2 bg-dark-blue hover:bg-secondary-light text-white text-sm font-bold px-4 py-2 shadow-md">
          <Image
            src="/icons/formicons/mapicon.svg"
            alt="Harita İkonu"
            width={16}
            height={16}
          />
          Haritada Göster
        </button>

        {/* Yol Tarifi Al */}
        <button className="flex items-center bg-primary hover:bg-primary-light gap-2 text-sm font-bold px-4 py-2 border-2 border-secondary">
          <MapPin className="w-4 h-4" />
          Yol Tarifi Al
        </button>
      </div>
    </div>
  );
}
