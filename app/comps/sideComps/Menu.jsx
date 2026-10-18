import { Link as ScrollLink } from "react-scroll";

export default function Menu({ shown, setShown }) {
  return (
    <main
      className={`${shown ? "translate-x-0" : "-translate-x-full"} z-50 transition-transform duration-150 flex fixed left-0 top-0 h-screen w-screen`}
    >
      <div className="flex flex-col gap-6 text-center text-xl font-medium h-full left-0 top-0 backdrop-blur-lg p-4 justify-center  backdrop-brightness-75 ">
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
      <button
        className="flex-grow cursor-default"
        onClick={() => setShown(false)}
      ></button>
    </main>
  );
}
