"use client";
import { Link as ScrollLink } from "react-scroll";
import "../../globals.css";

export default function Main() {
  return (
    <section
      id="Main"
      className="main-container w-full flex items-center justify-center h-screen bg-no-repeat "
    >
      <div className="w-full h-full items-center justify-evenly flex flex-col text-center gap-8">
        <h1 className="text-6xl lg:text-9xl bg-gradient-to-r bg-clip-text text-transparent from-yellow-300 via-yellow-500 to-yellow-700 lg:mb-40 mb-12">
          FlipsBalkan
        </h1>
        <ScrollLink
          to="Informacije"
          smooth={true}
          duration={1000}
          offset={-85}
          className="text-xl cursor-pointer bg-yellow-500 text-black hover:bg-yellow-700 transition-colors duration-150 w-max rounded-lg lg:-translate-y-16 p-2 self-center font-semibold"
        >
          SAZNAJ VIŠE!
        </ScrollLink>
      </div>
    </section>
  );
}
