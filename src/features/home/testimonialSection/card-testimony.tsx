import { Rating } from "@/components/ui/rating";
import Image from "next/image";
import User1 from "/public/image/user1.png";

function CardTestimony() {
  return (
    <div className="max-w-141.75 border border-[#F7FAFD]/40 bg-[#F7FAFD]/6 rounded-4xl p-5 sm:p-9.25 flex flex-col gap-5 sm:gap-10.5">
      <p className="font-light text-lg">
        AlForOne a parfaitement compris nos besoins et a créé un site moderne,
        fluide et professionnel. L’équipe a été réactive, créative et très à
        l’écoute tout au long du projet.
      </p>
      <div className="flex gap-4 items-center flex-col sm:flex-row text-center sm:text-left">
        <Image src={User1} alt="" sizes="63" />
        <div className="flex flex-col justify-around items-center sm:items-start">
          <h3 className="font-semibold text-2xl">Rakoto Andriamihaja</h3>
          <p className="font-light text-[16px]">Responsable marketing</p>
          <Rating value={4} readOnly variant="yellow" />
        </div>
      </div>
    </div>
  );
}

export default CardTestimony;
