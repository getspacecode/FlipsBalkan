"use client";
import Image from "next/image";
import uplatnicaSVG from "../../assets/uplatnica.svg";
import creditSVG from "../../assets/creditCard.svg";
import Link from "next/link";

export default function Payment({ close }) {
  return (
    <main
      className={`fixed w-full h-full flex z-50 backdrop-blur-sm backdrop-brightness-75 justify-center items-center`}
    >
      <div className="bg-neutral-800 items-center text-yellow-500 p-2 lg:p-4 gap-2 rounded-lg flex flex-col lg:flex-row w-1/2 ">
        <Link
          href={"https://www.paypal.com/ncp/payment/9CY2YU6SA88EL"}
          className="flex flex-col items-center text-center gap-2 w-full border-4 cursor-pointer border-transparent p-4 rounded-lg hover:border-yellow-500"
        >
          <Image src={creditSVG} alt="" className="w-full lg:w-1/5" />
          <h1>Paypal & Kartica</h1>
        </Link>
        <Link
          href={
            "https://www.instagram.com/sstuparr?igsh=eWlxNHYza3RybWQ2&utm_source=qr"
          }
          className="flex flex-col items-center gap-2 w-full text-center border-4 cursor-pointer border-transparent p-4 rounded-lg hover:border-yellow-500"
        >
          <Image src={uplatnicaSVG} alt="" className="w-full lg:w-1/5" />
          <h1>Uplatnica</h1>
        </Link>
      </div>
      <button
        onClick={() => close()}
        className="absolute w-full h-full -z-10 cursor-default"
      ></button>
    </main>
  );
}
