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
    <section className="absolute z-50 top-0 p-4 bottom-0 w-full md:border rounded bg-white flex flex-col items-center justify-center">
      <h2 className="font-bold text-2xl mt-5 pb-2">
        {risk.risk}
      </h2>
      <h2 className="text-base mb-5 md:mb-2">
        Escore: {score}
      </h2>
      <section className="flex flex-col text-center w-full mb-2">
        <section className="flex flex-col px-6 justify-evenly w-full bg-blue-100 border rounded py-4">
          <p className="mb-1 font-bold">0-2 Risco muito Baixo</p>
          <p className=" text-sm">Deambulação precoce</p>
        </section>
        <section className="flex px-6 flex-col justify-evenly w-full bg-orange-200 border rounded py-4">
          <p className="mb-1 font-bold">3 Risco Baixo</p>
          <p className="text-sm">Para pacientes com baixo risco de TEV, recomenda-se contra o uso de tromboprofilaxia farmacológica ou mecânica</p>
        </section>
        <section className="flex flex-col px-6 justify-evenly w-full bg-red-200 border rounded py-4">
          <p className="mb-1 font-bold">≥4 Risco Alto</p>
          <p className="text-sm">Tromboprofilaxia farmacológica com HBPM, HNF (de 12-12h ou 8-8h) ou fondaparina</p>
        </section>
      </section>
      <section className="flex flex-col md:flex-row justify-between w-full lg:w-full mb-5 md:mb-0">
        <button onClick={() => pdfPadua(risk, score)} className="bg-purple-500 select-none hover:bg-purple-800 w-full mb-2 md:mb-0 md:w-3/6 md:me-2 text-white py-3 rounded">
          Gerar PDF
        </button>
        <button onClick={show} className="bg-purple-500 select-none w-full md:w-3/6 hover:bg-purple-800 text-white py-3 rounded">
          Fechar
        </button>
      </section>
    </section>
  );
}

