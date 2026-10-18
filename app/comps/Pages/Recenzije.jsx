import Image from "next/image";
import uspesi1 from "../../assets/uspesi1.jpg";
import uspesi2 from "../../assets/uspesi2.jpg";
import uspesi3 from "../../assets/uspesi3.png";
import uspesi4 from "../../assets/uspesi4.jpg";
import uspesi5 from "../../assets/uspesi5.jpg";
import uspesi6 from "../../assets/uspesi6.jpg";

const reviews = [
  {
    id: 1,
    image: uspesi1,
    quote:
      "Ako tražite najbolju reselling grupu, ne tražite dalje! Ova grupa je apsolutno fenomenalna – od organizacije, informacija do podrške koju pružaju članovima.",
    name: "Andrej",
  },
  {
    id: 2,
    image: uspesi2,
    quote:
      "Isk kida premuim grupa bolja od svih ostalih grupa koje naplaćuju ulaz.Pored prejeftinih cena garderobe i patika imate i pristup stranim kursevima koji svi zajedno vrede 500e",
    name: "Nolee",
  },
  {
    id: 3,
    image: uspesi3,
    quote:
      "Najjače od svega je to što vam moderator odgovori u kratkom vremenskom periodu i pomogne vam, dok u nekim grupama morate čekati nekoliko sati ili dana da biste dobili samo običnu poruku.",
    name: "Djoxy",
  },
  {
    id: 4,
    image: uspesi4,
    quote:
      "Najbolja investicija mog života! Svaka preporuka svima koji žele da zarade.",
    name: "Dušan",
  },
  {
    id: 5,
    image: uspesi5,
    quote:
      "Podrška i saveti u grupi su neverovatni. Nikada nisam imao bolji mentorski program!",
    name: "Pavle",
  },
  {
    id: 6,
    image: uspesi6,
    quote:
      "U samo nekoliko meseci sam ostvario finansijsku slobodu. Ovo je prava stvar!",
    name: "Aleksandar",
  },
];

export default function Recenzije() {
  return (
    <section
      id="Recenzije"
      className="w-full mt-12 bg-yellow-400 text-black flex flex-col items-center justify-center"
    >
      <div className="p-8 lg:p-48 flex flex-col gap-12 w-full">
        <h1 className="text-4xl lg:text-5xl text-center text-neutral-800 font-bold mb-12 pb-4">
          Recenzije Članova
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center w-full items-start gap-8">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`bg-neutral-800 shadow-neutral-800 text-white p-6 rounded-lg h-full shadow-lg flex flex-col items-center gap-4 w-full lg:w-2/3 place-items-center  transition-transform transform hover:scale-105 hover:rotate-0 `}
            >
              <Image
                src={review.image}
                alt={review.name}
                width={200}
                height={500}
                className="rounded-lg w-full"
              />
              <div className="text-center flex flex-col gap-4 h-full">
                <p className="italic text-lg text-center">"{review.quote}"</p>
                <h3 className="font-bold text-yellow-400 ">- {review.name}</h3>
              </div>{" "}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
