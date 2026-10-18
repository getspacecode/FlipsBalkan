import Image from "next/image";
import logo from "../../assets/logo.jpg";
import Link from "next/link";
import instagram from "../../assets/instagram-brands.svg";
import tiktok from "../../assets/tiktok-brands.svg";
import telegram from "../../assets/telegram-brands.svg";

export default function Foooter() {
  return (
    <footer className="p-2 mt-12 bg-neutral-800 flex flex-col lg:flex-row justify-center gap-4 lg:gap-12 items-center">
      <div className="flex gap-12 justify-center items-center">
        <Link href={"/"}>
          <Image src={logo} alt="" width={75} className="lg:w-full" />
        </Link>
        <div className="font-bold">
          <h1 className="text-center flex items-center gap-2">
            <span className="text-2xl">©</span> 2025 FlipsBalkan
          </h1>
        </div>
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
      <div className="lg:hidden flex flex-col justify-center items-center gap-6">
        <h1 className="font-semibold text-xl text-yellow-500">Socials</h1>
        <div className="flex flex-col gap-2 text-center">
          <Link
            href={
              "https://www.instagram.com/sstuparr?igsh=eWlxNHYza3RybWQ2&utm_source=qr"
            }
          >
            <h1 className="font-semibold hover:text-yellow-300 transition duration-150">
              Instagram
            </h1>
          </Link>
          <Link
            href={"https://www.tiktok.com/@flipsbalkan?_t=ZM-8un2DDXfEIA&_r=1"}
          >
            <h1 className="font-semibold hover:text-yellow-300 transition duration-150">
              Tiktok
            </h1>
          </Link>
          <Link href={"https://t.me/+FLNbG6O5_4JlNDFk"}>
            <h1 className="font-semibold hover:text-yellow-300 transition duration-150">
              Telegram
            </h1>
          </Link>
        </div>{" "}
      </div>
    </footer>
  );
}
