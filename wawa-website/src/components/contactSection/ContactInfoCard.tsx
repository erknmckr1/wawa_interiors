import Image from "next/image";
import { Mail } from "lucide-react";
export default function ContactInfoCard() {
  return (
    <div className="w-full bg-primary text-secondary flex ">
      {/* Sol: Telefon ve E-posta */}
      <div className="md:w-[60%] w-full px-2 md:p-6 border-b md:border-b-0 md:border-r border-[#B2CB1C] flex flex-col justify-center gap-6">
        {/* Telefon */}
        <div className="flex items-start gap-4">
          <Image
            src="/icons/formicons/blackphone.svg"
            alt="Telefon İkon"
            width={24}
            height={24}
            className="mt-1"
          />
          <div>
            <h4 className=" md:text-lg leading-none">
              Telefon İletişim
            </h4>
            <p className="mt-1 text-sm font-medium">0 (212) 706 2832</p>
          </div>
        </div>

        {/* E-Posta */}
        <div className="flex items-start gap-4">
          <Mail className="mt-1" size={20} />
          <div>
            <h4 className=" md:text-lg leading-none">
              E-Posta İletişim
            </h4>
            <p className="mt-1 text-sm font-medium">info@wawainteriors.com</p>
          </div>
        </div>
      </div>

      {/* Sağ: Çalışma Saatleri */}
      <div className="md:w-[40%] w-full p-6 flex flex-col justify-center">
        <h4 className="md:text-lg mb-4">Çalışma Saatleri</h4>
        <ul className="text-sm space-y-2">
          <li>
            <span className="font-semibold">Pzt - Cum:</span> 09:00 - 18:00
          </li>
          <li>
            <span className="font-semibold">Cumartesi:</span> 09:00 - 18:00
          </li>
          <li>
            <span className="font-semibold">Pazar:</span> Kapalı
          </li>
        </ul>
      </div>
    </div>
  );
}
