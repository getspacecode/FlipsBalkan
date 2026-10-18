"use client";
import { Link as ScrollLink } from "react-scroll";

export default function Informacije() {
  return (
    <section id="Informacije" className="bg-yellow-400 text-black py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Informacije o Serveru</h2>
        <p className="text-lg mb-6 font-medium">
          Dobrodošli na oficijalni sajt '' FlipsBalkan'' Reselling grupe, ovde
          možete videti neke od mnogobrojnih zarada naših članova kao i ostale
          recenzije! Pridruži se i ti našoj zajednici, upoznajmo se i kreni da
          zaradjujes!
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          <div className="cursor-pointer bg-neutral-800 text-yellow-400 p-6 rounded-lg flex flex-col gap-6 shadow-xl shadow-neutral-800 hover:scale-105 transition-transform duration-150">
            <h3 className="text-xl font-semibold">Članovi</h3>
            <li className="text-lg">Preko 600 aktivnih članova.</li>
          </div>
          <div className="cursor-pointer bg-neutral-800 text-yellow-400 p-6 rounded-lg flex flex-col gap-6 shadow-xl shadow-neutral-800 hover:scale-105 transition-transform duration-150">
            <h3 className="text-xl font-semibold">Balkanski dobavljači</h3>
            <li className="text-lg">
              Kvalitet kao u radnjama, 1/1 a cena je 4 puta niža, dostava za
              24h.
            </li>
          </div>
          <div className="cursor-pointer bg-neutral-800 text-yellow-400 p-6 rounded-lg flex flex-col gap-6 shadow-xl shadow-neutral-800 hover:scale-105 transition-transform duration-150">
            <h3 className="text-xl font-semibold">Strani dobavljači</h3>
            <li className="text-lg">
              Kvalitet kao u radnjama, 1/1 cena i do 10 puta niža dostava u roku
              od 7-10 dana.
            </li>
          </div>
          <div className="cursor-pointer bg-neutral-800 text-yellow-400 p-6 rounded-lg flex flex-col gap-6 shadow-xl shadow-neutral-800 hover:scale-105 transition-transform duration-150">
            <h3 className="text-xl font-semibold">Dizajnerske Usluge</h3>
            <li className="text-lg">Profesionalni logo i web dizajneri</li>
          </div>
          <div className="cursor-pointer bg-neutral-800 text-yellow-400 p-6 rounded-lg flex flex-col gap-6 shadow-xl shadow-neutral-800 hover:scale-105 transition-transform duration-150">
            <h3 className="text-xl font-semibold">Digitalni proizvodi</h3>
            <li className="text-lg">
              Sve digitalne proizvode kao sto su Netflix, Spotify, HBO, Disney,
              crunchy idt... Imate kod naših dobavljača, KVALITET ZAGARANTOVAN!
            </li>
          </div>
          <div className="cursor-pointer bg-neutral-800 text-yellow-400 p-6 rounded-lg flex flex-col gap-6 shadow-xl shadow-neutral-800 hover:scale-105 transition-transform duration-150">
            <h3 className="text-xl font-semibold">Profesionalne slike</h3>
            <li className="text-lg">
              Patike, Parfemi, Apple proizvodi i još mnogo toga potpuno
              besplatno!
            </li>
          </div>
        </div>
        <div>
          <h1 className="text-lg font-semibold">
            Kompletan vodič kroz online biznis: kako započeti i uspešno voditi
            svoj posao
          </h1>
          <h1 className="text-lg font-semibold">
            Kako započeti biznis bez početnog kapitala (i kako to stvarno možeš
            da uradiš)
          </h1>
          <ul className="list-disc text-start w-full lg:w-1/3 px-8 lg:px-0 my-12 font-medium justify-self-center">
            <li>
              Opcije plaćanja: uplatnicom ili plaćanje paketa prilikom dostave
            </li>
            <li>
              Upoznavanje sa svim dobavljačima: Balkanskim (dostava za 24h),
              evropskim (dostava za 3-7 dana) i azijskim (dostava za 7-14 dana)
            </li>
            <li>Kako da odabereš proizvode koje ćeš prodavati</li>
            <li>
              Kako da napraviš oglase koji će privući što više ljudi (20+ metoda
              za najbolji rezultat)
            </li>
            <li>Načini kako brzo da pronađeš prve kupce</li>
            <li>
              Kako da napraviš svoj online shop i izgradiš brend koji će svi
              pamtiti
            </li>
            <li>
              Nauči sve o marketingu na društvenim mrežama i kako da "lansiraš"
              svoj proizvod u internet svet
            </li>
            <li>
              Postani pro u prodaji! Nauči veštinu koja ti može doneti ozbiljan
              novac i sve što želiš
            </li>
            <li>
              Popusti na proizvode i brža dostava - još bolje za tvoju zaradu
              Kako da uložiš svoj prvi zarađeni novac na pametan način
            </li>
            <li>
              Korak po korak: kako da pokreneš legalan biznis i postaneš
              preduzetnik
            </li>
          </ul>
          <h1 className="font-semibold text-xl mb-12 ">UZ TO DOBIJATE</h1>
          <ul className="w-full text-start lg:w-1/3 px-8 lg:px-0 font-medium list-disc justify-self-center">
            <li>
              Discord zajednicu, i odabrani staff team koji ce vas voditi kroz
              ceo naš sistem rada i pomagati u svako doba dana i noći
            </li>
            <li>
              Whatsapp zajednicu gde se konstantno svi čujemo i razmatramo o
              idejama za posao, kao i drugim stvarima nevezano za posao
            </li>
            <li>
              Live sastanci sa Jovom, gde ce on iznositi svoja iskustva sa
              resellingom, Jovo je aktivan 24/7 na svim društvenim mrežama, te
              će vam i on biti konstantno na raspolaganju
            </li>
            <li>
              VIdeo lekcije (56+), jednostavno je ne moguce ne uspeti pored
              ovoga!
            </li>
          </ul>
        </div>
        <div className="mt-16"></div>
        <ScrollLink
          to="PridruziteSe"
          smooth={true}
          offset={-85}
          duration={1000}
          className="p-4 cursor-pointer text-xl my-12 font-semibold bg-neutral-800 rounded-lg text-yellow-400 hover:bg-yellow-500 hover:text-black transition-all duration-150"
        >
          Učlani se već danas!
        </ScrollLink>
      </div>
    </section>
  );
}
