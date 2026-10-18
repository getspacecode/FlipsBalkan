"use client";
import crown from "../../assets/crown.svg";
import Image from "next/image";
import { useState } from "react";
import Payment from "../sideComps/Payment";

export default function PridruziSe() {
  const [shown, setShown] = useState(false);
  const closePopup = () => {
    setShown(false);
    console.log("Popup Closed");
  };
  return (
    <>
      <section
        id="PridruziteSe"
        className="m-4 rounded-lg lg:m-8 bg-neutral-800 text-black py-16 mt-12"
      >
        <div className="px-6 lg:px-12 flex flex-col items-center gap-12">
          <h1 className="text-4xl lg:text-5xl text-center font-bold mb-12 border-b-4 border-yellow-500 pb-4 text-white">
            Pridruži Se
          </h1>

          <div className="grid grid-cols-1 place-items-center justify-center gap-8 w-full">
            <div className="bg-yellow-500 px-8 py-16 rounded-lg shadow-lg flex flex-col items-center justify-between gap-12 text-center lg:w-1/5 lg:h-full">
              <div className="flex flex-col gap-6 items-center">
                <Image src={crown} alt="" className="w-1/3" />
                <h2 className="text-3xl font-bold">FlipsBalkan Members</h2>
                <ul className="list-disc w-full text-left text-lg pl-6">
                  <li>Lifetime Pristup</li>
                  <li>Mentorstvo</li>
                  <li>Pristup svim proizvodima</li>
                  <li>Dostava u roku od 24-48h</li>
                  <li>Najjači balkanski dobavljači</li>
                  <li>Veći kvalitet robe</li>
                  <li>Najjeftinije cene proizvoda </li>
                  <li>Niske cene usluga (Web dizajn, Logo)</li>
                </ul>
              </div>
              <button
                onClick={() => {
                  setShown(true);
                  console.log(shown);
                }}
                className="bg-neutral-900 w-full text-yellow-500 py-3 rounded-lg font-bold hover:bg-neutral-800 hover:scale-105 transition"
              >
                39.99e
              </button>
            </div>
          </div>
        </div>
      </section>
      {shown && <Payment close={closePopup} />}
    </>
  );
}
