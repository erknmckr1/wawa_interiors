import CompanyImageIntro from "./CompanyImageIntro";
import CompanyTextIntro from "./CompanyTextIntro";

export default function ComponyIntroSection() {
  return (
    <div className="relative py-8">
      <div className=" flex flex-col md:flex-row justify-between items-center gap-8 px-4 container mx-auto">
        <CompanyImageIntro />
        <CompanyTextIntro />
      </div>

      {/* Arka plan görseli */}
      <div
        className="block absolute right-0 top-0 w-full h-full bg-[url('/images/company_intro.png')] bg-contain bg-no-repeat bg-right"
        aria-hidden="true"
      />
    </div>
  );
}
