import Image, { StaticImageData } from "next/image";
function CardCollab({ name, logo }: { name: string; logo: StaticImageData }) {
  return (
    <div className="flex items-center justify-center gap-2.5 font-bold text-2xl">
      <Image src={logo} alt="" />
      <p>{name}</p>
    </div>
  );
}
export default CardCollab;
