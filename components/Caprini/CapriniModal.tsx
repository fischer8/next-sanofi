import React from "react";
import risk from "./risk";
import { ScoreResult } from "../types";

export default function CapriniModal({ score, show }: ScoreResult) {
  return (
    <section className="absolute z-20 top-0 bottom-0 w-full bg-opacity-40 flex items-center align-middle bg-black">
      <section className="w-5/6 md:w-4/6 opacity-100 p-24 border rounded mx-auto bg-white flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-5">
          Escore: {score}
        </h2>
        <section className="flex text-center w-full h-54 mb-5">
          {risk.map(({ num, color, desc }) => (
            <section key={num} className={`flex flex-col justify-evenly bg-${color}-300 border rounded p-5 w-2/6`}>
              <p className="mb-2 font-bold">{num}</p>
              <p className="text-xs">{desc}</p>
            </section>
          ))}
        </section>
        <section className="flex flex-row justify-between w-5/6 lg:w-4/6">
          <button onClick={() => show(false)} className="bg-purple-700 w-full md:me-2 md:w-3/6 md:p-3 hover:bg-purple-900 text-white py-1 px-4 rounded">
            Voltar
          </button>
          <button className="bg-purple-700 hover:bg-purple-900 w-3/6 hidden md:block text-white py-1 px-4 rounded">
            Gerar PDF
          </button>
        </section>
      </section>
    </section>
  );
}

