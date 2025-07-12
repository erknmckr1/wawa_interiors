"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="w-full bg-transparent text-white fixed z-50">
      <div className="container mx-auto px-4 h-[80px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="WAWA Logo"
            height={40}
            width={137}
            className="h-10 w-auto"
          />
        </div>

        {/* Desktop Menü */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a className="text-primary border-b-2 border-primary pb-1" href="#">
            Anasayfa
          </a>
          <a className="hover:text-primary" href="#">
            Hakkımızda
          </a>
          <a className="hover:text-primary" href="#">
            Neler Yapıyoruz?
          </a>
          <a className="hover:text-primary" href="#">
            Projelerimiz
          </a>
          <a className="hover:text-primary" href="#">
            Blog
          </a>
          <a className="hover:text-primary" href="#">
            İletişim
          </a>
        </nav>

        {/* Mobil Menü Paneli */}
        {/* Mobil Menü Paneli */}
        <div
          className={`
    md:hidden fixed top-0 right-0 w-64 h-screen bg-dark-blue text-white flex flex-col z-40 shadow-lg 
    transition-all duration-300 ease-in-out transform
    ${
      isOpen
        ? "translate-x-0 opacity-90"
        : "translate-x-full opacity-0 pointer-events-none"
    }
  `}
        >
          <div className="h-12 w-full border-b-4 border-secondary flex items-center">
            <button className="p-2" onClick={() => setIsOpen(false)}>
              <X />
            </button>
          </div>

          <div className="flex flex-col gap-6 px-6 py-8">
            <a href="#" className="hover:text-primary">
              Anasayfa
            </a>
            <a href="#" className="hover:text-primary">
              Hakkımızda
            </a>
            <a href="#" className="hover:text-primary">
              Neler Yapıyoruz?
            </a>
            <a href="#" className="hover:text-primary">
              Projelerimiz
            </a>
            <a href="#" className="hover:text-primary">
              Blog
            </a>
            <a href="#" className="hover:text-primary">
              İletişim
            </a>
          </div>

          <div className="bg-dark-blue w-full border-t-4 border-secondary absolute bottom-0 h-[100px] flex">
            <button className="w-1/2 border-r-2 border-secondary text-sm font-medium hover:bg-primary hover:text-dark-blue transition duration-200">
              EN
            </button>
            <button className="w-1/2 text-sm font-medium text-dark-blue hover:bg-primary hover:text-dark-blue transition duration-200">
              TR
            </button>
          </div>
        </div>

        <div></div>

        {/* Mobil sağ panel */}
        <div className="flex md:hidden items-center gap-2 z-10">
          {/* Arama Butonu */}
          <div className="hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center">
            <Image
              src="/icons/searchicon.svg"
              width={20}
              height={20}
              alt="search"
            />
          </div>

          {/* Burger Menü Butonu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 flex items-center justify-center"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Sağ Panel */}
        <div className="hidden md:flex h-full absolute bg-dark-blue top-0 right-0">
          {/* Arama Butonu */}
          <div className="hover:bg-primary transition duration-200 w-[80px] flex items-center justify-center cursor-pointer">
            <Image
              src="/icons/searchicon.svg"
              width={20}
              height={20}
              alt="search"
            />
          </div>

          {/* Dil Seçimi */}
          <div className="bg-dark-blue flex">
            <button className="w-[80px] text-sm font-medium  hover:bg-primary hover:text-dark-blue transition duration-200">
              EN
            </button>
            <button className="w-[80px] text-sm font-medium  text-dark-blue hover:bg-primary hover:text-dark-blue transition duration-200">
              TR
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
