import React from "react";
import { ScoreResult } from "../types";
import pdfCaprini from "../JsPdf/pdfCaprini";

export default function CapriniModal({ score, show }: ScoreResult) {
  let risk = 'Risco Baixo';
  if (score > 4) {
    risk = 'Risco Alto';
  } else if (score > 2) {
    risk = 'Risco Moderado'
  }
  return (
    <section className="absolute z-20 top-0 bottom-0 w-full md:bg-opacity-50 flex items-center align-middle md:bg-black">
      <section className="absolute top-0 bottom-0 md:static w-full md:w-5/6 md:p-24 md:border rounded md:mx-auto bg-white flex flex-col items-center justify-center">
        <h2 className="font-bold text-2x1 md:text-xl mb-5 pb-5">
          {risk}
        </h2>
        <h2 className="text-base mb-5">
          Escore: {score}
        </h2>
        <section className="flex flex-col lg:flex-row text-center w-5/6 h-54 mb-5">
          <section className="flex flex-col me-1 justify-evenly w-full bg-blue-300 border rounded p-5 lg:w-2/6">
            <p className="mb-2 font-bold">1-2 Risco Baixo</p>
            <p className="text-sm">Profilaxia mecânica (CPI)</p>
          </section>
          <section className="flex flex-col me-1 justify-evenly w-full bg-orange-300 border rounded p-5 lg:w-2/6">
            <p className="mb-2 font-bold">3-4 Risco Moderado</p>
            <p className="text-sm">Profilaxia farmacológica (HNF ou HBPM)</p>
          </section>
          <section className="flex flex-col me-1 justify-evenly w-full bg-red-300 border rounded p-5 lg:w-2/6">
            <p className="mb-2 font-bold">≥5 Risco Alto</p>
            <p className="text-sm">Profilaxia farmacológica (HNF ou HBPM) + profilaxia mecânica (CPI ou meias antitrombo). Pacientes de alto risco submetidos à cirurgia oncológica abdominal e pélvica: estender a profilaxia por 4 semanas</p>
          </section>
        </section>
        <section className="flex flex-col md:flex-row justify-between w-5/6 lg:w-4/6">
          <button onClick={() => pdfCaprini(risk, score)}className="bg-purple-500 hover:bg-purple-800 w-full mb-2 md:mb-0 md:w-3/6 md:me-2 text-white py-2 md:py-4 rounded">
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

