import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Image from "next/image";

type AccordionItemType = {
  title: string;
  content: string;
};

type FairStandIntroProps = {
  heading: string;
  title: string;
  paragraphs: string[];
  accordionItems: AccordionItemType[];
  buttonText?: string;
};

export default function FairStandIntro({
  heading,
  title,
  paragraphs,
  accordionItems,
  buttonText = "Proje Teklifi Alın!",
}: FairStandIntroProps) {
  return (
    <div className="md:w-1/2 text-white">
      {/* Başlıklar */}
      <div>
        <p className="text-primary text-[25px] md:py-8 font-semibold">
          {heading}
        </p>
        <h2 className="text-[32px] md:text-[55px]">{title}</h2>
      </div>

      {/* Paragraflar */}
      <div className="space-y-6 mt-6 md:text-lg">
        {paragraphs.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      {/* Accordion */}
      <Accordion
        type="single"
        collapsible
        className="w-full mt-8 flex flex-col gap-4"
      >
        {accordionItems.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="text-white overflow-hidden border-none"
          >
            <AccordionTrigger className="px-6 py-4 font-bold text-left text-base data-[state=closed]:bg-[#3A3A61] data-[state=open]:bg-[#C1DB25] data-[state=open]:text-[#141425]">
              <span>{item.title}</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-sm text-white/80 bg-3A3A61">
              <p>{item.content}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Teklif Butonu */}
      <button className="w-full flex justify-between items-center mt-6 border border-dashed border-white p-4 cursor-pointer hover:bg-secondary-light duration-200 transition">
        <Image
          src={"/images/fairstandintro/sum.svg"}
          width={24}
          height={24}
          alt="Sum Icon"
        />
        <span className="text-lg">{buttonText}</span>
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