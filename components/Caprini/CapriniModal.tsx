import React from "react";
import { ScoreResult } from "../types";

export default function CapriniModal({ score, show }: ScoreResult) {
  return (
    <section className="absolute top-0 bottom-0 w-full bg-opacity-40 bg-black">
      <section className="w-5/6 md:w-4/6 mt-32 opacity-100 p-10 border rounded mx-auto bg-white flex flex-col items-center">
        {score}
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

