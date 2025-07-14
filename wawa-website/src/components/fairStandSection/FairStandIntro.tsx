import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Image from "next/image";
export default function FairStandIntro() {
  return (
    <div className="md:w-1/2 text-white">
      {/* title */}
      <div>
        <p className="text-primary text-[25px] font-semibold">
          # YURTİÇİ VE YURTDIŞI FUAR STANDI
        </p>
        <h2 className=" text-[32px] md:text-[55px]">Fuar Standı Tasarımı ve Uygulama</h2>
      </div>
      {/* paragraph */}
      <div className="space-y-6 mt-6 md:text-lg">
        <p>
          Fuar stand tasarımı konusunda Wawa İç mimarlık olarak yurtiçi ve
          yurtdışı katılım sağladığınız fuarlar da kreatif ve zamanında
          teslimatı önemseyen iç mimarlık ofisidir.
        </p>
        <p>
          Fuar standı konusunda sizlere verdiğimiz hizmetin uzun soluklu bir
          marka dostluğunun başlangıcı olmasını diliyoruz.
        </p>
      </div>
      {/* Accordion */}
      <Accordion
        type="single"
        collapsible
        className="w-full mt-8 flex flex-col gap-4"
      >
        {/* 1. item */}
        <AccordionItem
          value="item-1"
          className=" text-white   overflow-hidden border-none"
        >
          <AccordionTrigger className="px-6 py-4 font-bold text-left text-base data-[state=closed]:bg-[#3A3A61] data-[state=open]:bg-[#C1DB25] data-[state=open]:text-[#141425] ">
            <span>Fuar Standı Yapan Firmalar</span>
          </AccordionTrigger>
          <AccordionContent className="px-6 py-4 text-sm text-white/80 bg-3A3A61 ">
            <p>
              Pazarlanan ürünler mağaza dışı vitrinlerde ve mağaza içi
              vitrinlerde herkesin rahatça görebileceği şekilde sergilenmelidir.
              Ürünleri sergilerken ürünlerin açıları, vitrin aydınlatması,
              sektöre göre oluşturulan kombinler markanıza uygun
              tasarlanmalıdır. Mağaza tasarımında, her faktör markaya ve ürüne
              özel olmalıdır.
            </p>
          </AccordionContent>
        </AccordionItem>
        {/* 3. item */}
        <AccordionItem
          value="item-3"
          className=" text-white   overflow-hidden border-none"
        >
          <AccordionTrigger className="px-6 py-4 font-bold text-left text-base data-[state=closed]:bg-[#3A3A61] data-[state=open]:bg-[#C1DB25] data-[state=open]:text-[#141425] ">
            <span>Fuar Standı Yapan Firmalar</span>
          </AccordionTrigger>
          <AccordionContent className="px-6 py-4 text-sm text-white/80 bg-3A3A61 ">
            <p>
              Pazarlanan ürünler mağaza dışı vitrinlerde ve mağaza içi
              vitrinlerde herkesin rahatça görebileceği şekilde sergilenmelidir.
              Ürünleri sergilerken ürünlerin açıları, vitrin aydınlatması,
              sektöre göre oluşturulan kombinler markanıza uygun
              tasarlanmalıdır. Mağaza tasarımında, her faktör markaya ve ürüne
              özel olmalıdır.
            </p>
          </AccordionContent>
        </AccordionItem>
        {/* 2. item */}
        <AccordionItem value="item-2" className=" text-white   overflow-hidden">
          <AccordionTrigger className="px-6 py-4 font-bold text-left text-base data-[state=closed]:bg-[#3A3A61] data-[state=open]:bg-[#C1DB25] data-[state=open]:text-[#141425] ">
            <span>Fuar Standı Yapan Firmalar</span>
          </AccordionTrigger>
          <AccordionContent className="px-6 py-4 text-sm text-white/80 bg-3A3A61 ">
            <p>
              Pazarlanan ürünler mağaza dışı vitrinlerde ve mağaza içi
              vitrinlerde herkesin rahatça görebileceği şekilde sergilenmelidir.
              Ürünleri sergilerken ürünlerin açıları, vitrin aydınlatması,
              sektöre göre oluşturulan kombinler markanıza uygun
              tasarlanmalıdır. Mağaza tasarımında, her faktör markaya ve ürüne
              özel olmalıdır.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      {/* teklif div */}
      <button className="w-full flex justify-between items-center mt-6 border border-dashed border-white p-4 cursor-pointer hover:bg-secondary-light duration-200 transition">
        <Image
          src={"/images/fairstandintro/sum.svg"}
          width={24}
          height={24}
          alt="Sum Icon"
        />
        <span className="text-lg"> Proje Teklifi Alın!</span>
        <Image
          src={"/images/fairstandintro/sum.svg"}
          width={24}
          height={24}
          alt="Sum Icon"
        />
      </button>
    </div>
  );
}
