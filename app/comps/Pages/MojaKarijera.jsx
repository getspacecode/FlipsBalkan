import Image from "next/image";
import stupar from "../../assets/stupar.jpg";
import stuparLogo from "../../assets/stupar_logo.jpg";

export default function MojaKarijera() {
  return (
    <section id="MojaKarijera" className="w-full mt-12">
      <div className="bg-neutral-800 my-4 mx-4 lg:mx-24 rounded-lg p-6 lg:p-12 flex flex-col gap-12 shadow-lg">
        <h1 className="text-4xl lg:text-5xl text-center text-yellow-500 font-bold mb-6">
          Moja Karijera
        </h1>

        {/* Vlasnik Sekcija */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
          <Image
            src={stupar}
            alt="Jovo Stupar"
            className="w-full lg:w-1/5 rounded-lg shadow-md"
          />
          <div className="text-lg lg:text-xl lg:w-1/2 leading-relaxed text-gray-200">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">INTRO</h2>
            <p>
              Ime mi je Jovo Stupar. Kao organizator i vlasnik ove kompanije
              želeo sam svima da se predstavim ovim putem! Dolazim iz jednog
              malog mesta na severu Srbije. Iz skromne sam porodice, gde da sam
              ostao u tim mislima "završi školu, idi na fakultet i biće ti
              super", ne bih postigao ništa od ovoga. Kao mali sam radio leti po
              sezonama, znajući da moram da napravim pare kako znam i umem. Bio
              sam frustriran i često sam se osećao beznadežno. Znao sam da moram
              da pronađem način da se izvučem iz toga.
            </p>
          </div>
        </div>

        {/* Logo Sekcija */}
        <div className="flex flex-col lg:flex-row-reverse justify-center items-center gap-12">
          <Image
            src={stuparLogo}
            alt="Stupar Logo"
            className="w-full lg:w-1/5 rounded-lg shadow-md"
          />
          <div className="text-lg lg:text-xl text-right lg:w-1/2 leading-relaxed text-gray-200">
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">POCETAK</h2>
            <p>
              Kada sam skupio dovoljno novca, investirao sam ga u online biznis
              model zvani: "RESELLING". Sa svojih nepunih 17 godina sam krenuo
              da se bavim resellingom, i posle nekoliko meseci napravio svojih
              prvih 500€, sada imam 18 godina i potpuno sam skalirao proces na
              2000€+ mesečno. Znao sam da, da bih postigao pravi uspeh, moram da
              uložim svaki deo svog vremena i energije. Iako sam morao da
              donesem teške odluke, kao što su staviti školu i neke druge stvari
              na stranu, bio sam spreman da se potpuno posvetim svom cilju. Moj
              fokus je bio jasan: da napravim nešto veliko, i nisam želeo da
              nešto drugo stoji između mene i mog uspeha. Pa i posle toga,
              učinio sam svoje roditelje ponosnim! A evo kako mogu pomoći i tebi
              da uradiš isto ovo. 🤝
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
