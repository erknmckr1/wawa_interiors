import FooterTopBar from "./FooterTopBar";
import FooterAboutSection from "./FooterAboutSection";
import FooterMenüList from "./FooterMenüList";
import FooterServicesList from "./FooterServicesList";
import FooterSubsBox from "./FooterSubsBox";
import FooterBottom from "./FooterBottom";
import FadeInSection from "@/components/ui/FadeInSection";
import Image from "next/image";
export default function FooterWrapper() {
  return (
    <FadeInSection>
      <div className="w-full relative overflow-hidden z-0  ">
        <Image
        src={"/images/footerimg1.png"}
        alt="footer background"
        width={72}
        height={141}
        className="absolute top-30 left-0"
        />
        <Image
        src={"/images/footer_lines.png"}
        alt="footer background"
        width={300}
        height={100}
        className="absolute top-60 md:top-5 right-0 z-[-1] "
        />
        <FooterTopBar />

        <div className="container mx-auto  py-8 border-b-2 border-sub-color">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4 md:p-0 ">
            <FooterAboutSection />
            <FooterServicesList />
            <FooterMenüList />
            <FooterSubsBox />
          </div>
        </div>
        <FooterBottom />
      </div>
    </FadeInSection>
  );
}
