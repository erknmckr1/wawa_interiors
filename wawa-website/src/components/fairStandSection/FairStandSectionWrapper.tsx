import FairStandIntro from "./FairStandIntro";
import ProjectFlow from "./ProjectFlow";
import Image from "next/image";
export default function FairStandSectionWrapper() {
  return (
    <div className="relative">
      <div className=" w-full container mx-auto py-12 px-4 flex flex-col md:flex-row gap-y-6 md:gap-y-0 gap-x-6">
        <FairStandIntro />
        <ProjectFlow />
        {/* Image */}
      </div>
      <div className="absolute left-0 top-0 -z-1">
        <Image
          src={"/images/fairstandintro/fair.png"}
          alt="Fair Stand"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
