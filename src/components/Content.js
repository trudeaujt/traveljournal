import React from "react";
import Card from "./Card";
import data from "./../data";

export default function Content() {
  const cards = data.map((card) => <Card key={card.id} {...card} />);
  return <div className="content">{cards}</div>;
}
