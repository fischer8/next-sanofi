import React from "react";
import { ScoreResult } from "../types";
import pdfCaprini from "../JsPdf/pdfCaprini";

export default function CapriniModal({ score, show }: ScoreResult) {
  let risk = { id: 1, risk: 'Risco Baixo' };
  if (score > 4) {
    risk = { id: 3, risk: 'Risco Alto' };
  } else if (score > 2) {
    risk = { id: 2, risk: 'Risco Moderado' };
  } else if (score === 0) {
    risk = { id: 0, risk: 'Risco Muito Baixo' };
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
        <section className="flex flex-col justify-evenly w-full bg-blue-100 border rounded py-2">
          <p className="mb-1 font-bold">{'<1 Risco Muito Baixo'}</p>
          <p className="text-sm">Deambulação precoce</p>
        </section>
        <section className="flex flex-col justify-evenly w-full bg-blue-200 border rounded py-2">
          <p className="mb-1 font-bold">1-2 Risco Baixo</p>
          <p className="text-sm">Profilaxia mecânica (CPI)</p>
        </section>
        <section className="flex flex-col justify-evenly w-full bg-orange-200 border rounded py-2">
          <p className="mb-1 font-bold">3-4 Risco Moderado</p>
          <p className="text-sm">Profilaxia farmacológica (HNF ou HBPM)</p>
        </section>
        <section className="flex flex-col justify-evenly w-full bg-red-200 border rounded p-2">
          <p className="mb-1 font-bold">≥5 Risco Alto</p>
          <p className="text-sm">Profilaxia farmacológica (HNF ou HBPM) + profilaxia mecânica (CPI ou meias antitrombo). Pacientes de alto risco submetidos à cirurgia oncológica abdominal e pélvica: estender a profilaxia por 4 semanas</p>
        </section>
      </section>
      <section className="flex flex-col md:flex-row justify-between w-full lg:w-full mb-5 md:mb-0">
        <button onClick={() => pdfCaprini(risk, score)} className="bg-purple-500 select-none hover:bg-purple-800 w-full mb-2 md:mb-0 md:w-3/6 md:me-2 text-white py-3 rounded">
          Gerar PDF
        </button>
        <button onClick={show} className="bg-purple-500 select-none w-full md:w-3/6 hover:bg-purple-800 text-white py-3 rounded">
          Fechar
        </button>
      </section>
    </section>
  );
}

