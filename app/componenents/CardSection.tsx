import Card from "./Card";
import { CardType } from "../types";
import { cardData } from "../dummy_data";

const CardSection = () => {
  return (
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
};

export default CardSection;
