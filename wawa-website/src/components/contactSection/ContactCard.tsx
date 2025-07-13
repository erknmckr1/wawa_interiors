import Image from "next/image";
import ContactInfoCard from "./ContactInfoCard";
import AddressInfoCard from "./AddressInfoCard";
export default function ContactCard() {
  return (
    <div className="md:w-[40%] text-white space-y-14 p-4 ">
      {/* title & icon */}
      <div className="flex gap-x-10 items-center justify-end">
        <div className="space-y-5">
          <h4 className="text-primary text-sm">WAWA İÇ MİMARLIK</h4>
          <h2 className="text-3xl">İletişim Bilgilerimiz</h2>
        </div>
        <div className="w-18 h-18 border-2 border-primary flex justify-center items-center">
          <Image
            src={"/icons/formicons/phone.svg"}
            alt="Contact Icon"
            width={24}
            height={24}
          />
        </div>
      </div>
      {/* cards */}
      <div className=" space-y-5 md:space-y-2 2xl:space-y-6">
        <ContactInfoCard />
        <AddressInfoCard />
      </div>
    </div>
  );
}
