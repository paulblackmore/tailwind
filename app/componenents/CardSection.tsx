import { CardType } from "../types";
import { cardData } from "../dummy_data";

const Card = ({ title, desc, btnText }: CardType) => (
  <section className="bg-slate-200 grid-col-span-4 text-cyan-700 p-6 py-2 px-4 rounded">
    <div className="grid gap-8 mt-2 mb-2">
      <h1 className="text-2xl">{title}</h1>
      <p>{desc}</p>
      <button className="bg-slate-500 text-gray-200 py-2 px-4 rounded font-semibold">
        {btnText}
      </button>
    </div>
  </section>
);

const CardSection = () => (
  <div className="grid grid-cols-4 gap-4 w-full p-10">
    {cardData.map((card: CardType) => (
      <Card
        key={card.id}
        title={card.title}
        desc={card.desc}
        btnText={card.btnText}
      />
    ))}
  </div>
);

export default CardSection;
