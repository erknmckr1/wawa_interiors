import ContactSection from "./ContactSection";
import ContactCard from "./ContactCard";
import FadeInSection from "../ui/FadeInSection";
export default function ContactSectionWrapper() {
  return (
    <FadeInSection>
      <div className="bg-dark-blue w-screen container mx-auto py-12 border-t border-sub-color">
        <div className="w-full flex md:flex-row flex-col">
          {/* right */}
          <ContactSection />
          {/* left */}
          <ContactCard />
        </div>
      </div>
    </FadeInSection>
  );
}
