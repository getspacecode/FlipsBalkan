import Main from "./comps/Pages/Main";
import Informacije from "./comps/Pages/Informacije";
import MojaKarijera from "./comps/Pages/MojaKarijera";
import Recenzije from "./comps/Pages/Recenzije.jsx";
import PridruziSe from "./comps/Pages/PridruziSe";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col">
      <Main />
      <Informacije />
      <MojaKarijera />
      <Recenzije />
      <PridruziSe />
    </main>
  );
}
