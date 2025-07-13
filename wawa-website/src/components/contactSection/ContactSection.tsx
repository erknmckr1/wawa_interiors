import { Mail } from "lucide-react";

import ContactForm from "./ContactForm";
export default function ContactSection() {
  return (
    <div className="md:w-[60%] h-auto text-white space-y-14 p-4  ">
      {/* title & icon */}
      <div className="flex gap-x-10 items-center">
        <div className="w-18 h-18 border-2 border-primary flex justify-center items-center">
          <Mail className="w-6 h-6 text-primary" />
        </div>
        <div className="space-y-5">
          <h4 className="text-primary text-sm">WAWA İÇ MİMARLIK</h4>
          <h2 className="text-3xl">Bize Mail Gönderin</h2>
        </div>
      </div>
      {/* form */}
      <ContactForm />
    </div>
  );
}
