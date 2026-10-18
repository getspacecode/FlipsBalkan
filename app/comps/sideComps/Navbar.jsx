"use client";
import { useState } from "react";
import Menu from "../sideComps/Menu.jsx";
import Image from "next/image.js";
import logo from "../../assets/logo.jpg";
import Link from "next/link.js";
import { Link as ScrollLink } from "react-scroll";
import instagram from "../../assets/instagram-brands.svg";
import tiktok from "../../assets/tiktok-brands.svg";
import telegram from "../../assets/telegram-brands.svg";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* LG Layout */}
      <div className="hidden m-4 lg:flex items-center justify-between backdrop-blur-md backdrop-brightness-90 p-2 rounded-md">
        <Link href={"/"}>
          <Image src={logo} alt="" width={60} className="rounded-full" />
        </Link>
        <div className="flex text-center gap-8 font-medium text-xl mr-12">
          <ScrollLink
            to="Informacije"
            offset={-85}
            smooth={true}
            duration={500}
            className="text-yellow-400 hover:text-yellow-600 cursor-pointer p-1.5 transition-all duration-150 rounded-lg"
          >
            Informacije
          </ScrollLink>
          <ScrollLink
            to="MojaKarijera"
            offset={-85}
            smooth={true}
            duration={500}
            className="text-yellow-400 hover:text-yellow-600 cursor-pointer p-1.5 transition-all duration-150 rounded-lg"
          >
            Moja Karijera
          </ScrollLink>
          <ScrollLink
            to="Recenzije"
            offset={-85}
            smooth={true}
            duration={500}
            className="text-yellow-400 hover:text-yellow-600 cursor-pointer p-1.5 transition-all duration-150 rounded-lg"
          >
            Recenzije
          </ScrollLink>
          <ScrollLink
            to="PridruziteSe"
            offset={-85}
            smooth={true}
            duration={500}
            className="text-yellow-400 hover:text-yellow-600 cursor-pointer p-1.5 transition-all duration-150 rounded-lg"
          >
            Pridružite se!
          </ScrollLink>
        </div>
        <div className="hidden lg:flex justify-center items-center gap-6">
          <Link
            href={
              "https://www.instagram.com/sstuparr?igsh=eWlxNHYza3RybWQ2&utm_source=qr"
            }
            className="hover:-translate-y-1 transition duration-150"
          >
            <Image src={instagram} width={30} alt="" />
          </Link>
          <Link
            href={"https://www.tiktok.com/@flipsbalkan?_t=ZM-8un2DDXfEIA&_r=1"}
            className="hover:-translate-y-1 transition duration-150"
          >
            <Image src={tiktok} width={30} alt="" />
          </Link>
          <Link
            href={"https://t.me/+FLNbG6O5_4JlNDFk"}
            className="hover:-translate-y-1 transition duration-150"
          >
            <Image src={telegram} width={30} alt="" />
          </Link>
        </div>
      </div>

      {/* SM Layout */}
      <div className="flex m-2 p-2 lg:hidden flex-col rounded-md bg-neutral-800">
        <Menu shown={menu} setShown={setMenu} />
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <Image src={logo} alt="" width={60} className="rounded-full" />
          </Link>{" "}
          <button
            onClick={() => setMenu(!menu)}
            className="flex flex-col gap-1.5 cursor-pointer mr-4 active:scale-110"
          >
            <div className="w-6 h-0.5 bg-white rounded-full" />
            <div className="w-6 h-0.5 bg-white rounded-full" />
            <div className="w-6 h-0.5 bg-white rounded-full" />
          </button>
        </div>
      </div>
    </nav>
  );
}
