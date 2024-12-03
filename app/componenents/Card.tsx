import React from "react";
import { CardType } from "../types";

const Card = ({ title, desc, btnText }: CardType) => {
  return (
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
};

export default Card;
