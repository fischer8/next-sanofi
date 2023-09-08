import React from "react";
import { ScoreResult } from "../types";

export default function CapriniResult({ score, show }: ScoreResult) {
  return (
    <section className="absolute w-full h-full bg-opacity-40 bg-black">
      <section className="w-3/6 mt-32 opacity-100 p-10 mx-auto bg-white flex flex-col items-center">
        {score}
        <button onClick={() => show(false)}className="bg-purple-700 hover:bg-purple-900 text-white py-1 px-4 rounded">
          Voltar
        </button>
      </section>
    </section>
  );
}

