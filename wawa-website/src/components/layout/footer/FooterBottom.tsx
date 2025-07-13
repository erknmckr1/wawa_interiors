import Image from "next/image"

export default function FooterBottom(){
    return(
        <div className="md:container md:mx-auto px-4 md:px-0 py-4 text-sub-color flex items-center justify-between text-xs md:text-sm">   
            <Image
            
            alt="footericon"
            width={75}
            height={20}
            src={"/icons/footericon.svg"}/>
            <p className="">Telif hakkı © 2022 Wawa Interiors. Tüm hakları saklıdır.</p>
        </div>
    )
}