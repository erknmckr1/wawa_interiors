// components/layout/ContentSection.tsx
import Image from "next/image";

type FairStandSectionWrapperProps = {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  backgroundImage?: string;
};

export default function FairStandSectionWrapper({
  leftContent,
  rightContent,
  backgroundImage = "/images/fairstandintro/fair.png",
}: FairStandSectionWrapperProps) {
  return (
    <div className="relative">
      <div className="w-full container mx-auto py-12 px-4 flex flex-col md:flex-row gap-y-6 md:gap-y-0 gap-x-6">
        {leftContent}
        {rightContent}
      </div>
      {backgroundImage && (
        <div className="absolute left-0 top-0 -z-10">
          <Image
            src={backgroundImage}
            alt="Section Background"
            width={500}
            height={500}
          />
        </div>
      )}
    </div>
  );
}
