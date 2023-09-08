import React from "react";
import riskInfo from "./risk";
import { ScoreResult } from "../types";
import Back from "../Back";

export default function CapriniModal({ score, show }: ScoreResult) {
  let riskId = 0;
  if (score > 0 && score < 3) {
    riskId = 1;
  } else if (score >= 3 && score < 5) {
    riskId = 2;
  } else if (score >= 5) {
    riskId = 3;
  }

  return (
    <section className="absolute z-20 top-0 bottom-0 w-full md:bg-opacity-40 flex items-center align-middle md:bg-black">
      <section className="absolute top-0 bottom-0 md:static w-full md:w-5/6 md:p-24 md:border rounded md:mx-auto bg-white flex flex-col items-center justify-center">
        <h2 className="font-bold text-2x1 md:text-xl mb-5 pb-5">
          {riskInfo[riskId].risk}
        </h2>
        <h2 className="text-base mb-5">
          Escore: {score}
        </h2>
        <section className="flex flex-col lg:flex-row text-center w-5/6 h-54 mb-5">
          {riskInfo.map(({ title, color, desc }) => (
            <section key={title} className={`flex flex-col me-1 justify-evenly w-full bg-${color}-300 border rounded p-5 lg:w-2/6`}>
              <p className="mb-2 font-bold">{title}</p>
              <p className="text-sm">{desc}</p>
            </section>
          ))}
        </section>
        <section className="flex flex-col md:flex-row justify-between w-5/6 lg:w-4/6">
          <button className="bg-purple-500 hover:bg-purple-800 w-full mb-2 md:mb-0 md:w-3/6 md:me-2 text-white py-2 md:py-4 rounded">
            Gerar PDF
          </button>
          <button onClick={() => show(false)} className="bg-purple-500 w-full md:w-3/6 hover:bg-purple-800 text-white py-2 md:py-4 rounded">
            Voltar
          </button>
        </section>
      </section>
    </section>
  );
}

