import CompanyImageIntro from "./CompanyImageIntro";
import CompanyTextIntro from "./CompanyTextIntro";
import FadeInSection from "@/components/ui/FadeInSection";
export default function ComponyIntroSection() {
  return (
    <FadeInSection>
      <div className="relative py-12 z-0">
        <div className=" flex flex-col md:flex-row justify-between items-center gap-8 px-4 container mx-auto">
          <CompanyImageIntro />
          <CompanyTextIntro />
        </div>

        {/* Arka plan görseli */}
        <div
          className="block absolute -z-1 right-0 top-0 w-full h-full bg-[url('/images/company_intro.png')] bg-contain bg-no-repeat bg-right"
          aria-hidden="true"
        />
      </div>
    </FadeInSection>
  );
}
