import { useEffect, useState } from "react";
import Card from "./Card";

const Cards = ({ handleSelectedCourse }) => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div className="grid grid-cols-3 gap-5 pb-5 flex-1">
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          handleSelectedCourse={() => handleSelectedCourse(card)}
        ></Card>
      ))}
    </div>
  );
};

export default Cards;