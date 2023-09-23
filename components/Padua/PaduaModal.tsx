import React from "react";
import { ScoreResult } from "../types";
import pdfPadua from "../JsPdf/pdfPadua";

export default function PaduaModal({ score, show }: ScoreResult) {
  let risk = { id: 0, risk: 'Risco Muito Baixo' };
  if (score >= 4) {
    risk = { id: 3, risk: 'Risco Alto' };
  } else if (score > 2) {
    risk = { id: 2, risk: 'Risco Baixo' };
  }

  return (
    <section className="absolute z-20 top-0 bottom-0 w-full md:bg-opacity-80 flex items-center align-middle md:bg-black">
      <section className="absolute top-0 bottom-0 md:static w-full md:w-5/6 lg:w-[1200px] md:py-24 md:border rounded md:mx-auto bg-white flex flex-col items-center justify-center">
        <h2 className="font-bold text-3xl md:text-2x1 lg:text-xl mt-5 pb-5">
          {risk.risk}
        </h2>
        <h2 className="text-base mb-5">
          Escore: {score}
        </h2>
        <section className="flex flex-col lg:flex-row text-center w-5/6 mb-5">
          <section className="flex p-2 flex-col md:me-1 justify-evenly w-full bg-blue-200 border rounded py-2 md:py-5 lg:w-2/6">
            <p className="mb-2 font-bold">0-2 Risco muito Baixo</p>
            <p className="text-sm">Deambulação precoce</p>
          </section>
          <section className="flex p-4 flex-col md:me-1 justify-evenly w-full bg-orange-200 border rounded py-2 md:py-5 lg:w-2/6">
            <p className="mb-2 font-bold">3 Risco Baixo</p>
            <p className="text-sm">Para pacientes com baixo risco de TEV, recomenda-se contra o uso de tromboprofilaxia farmacológica ou mecânica</p>
          </section>
          <section className="flex flex-col md:me-1 justify-evenly w-full bg-red-200 border rounded p-4 md:py-5 lg:w-2/6">
            <p className="mb-2 font-bold">≥4 Risco Alto</p>
            <p className="text-sm">Tromboprofilaxia farmacológica com HBPM, HNF (de 12-12h ou 8-8h) ou fondaparina</p>
          </section>
        </section>
        <section className="flex flex-col md:flex-row justify-between w-5/6 lg:w-4/6 mb-5 md:mb-0">
          <button onClick={() => pdfPadua(risk, score)} className="bg-purple-500 hover:bg-purple-800 w-full mb-2 md:mb-0 md:w-3/6 md:me-2 text-white py-2 md:py-4 rounded">
            Gerar PDF
          </button>
          <button onClick={() => show(false)} className="bg-purple-500 w-full md:w-3/6 hover:bg-purple-800 text-white py-2 md:py-4 rounded">
            Fechar
          </button>
        </section>
      </section>
    </section>
  );
}

