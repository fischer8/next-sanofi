"use client"
import { useState, useEffect } from 'react';
import Card from '@/components/Caprini/Card'
import { ScoreObj } from '@/components/types';

export default function Caprini() {
  const [score, setScore] = useState<ScoreObj[]>([]);
  const [menuPage, setMenuPage] = useState(0)

  const handleScore = (rawScore: ScoreObj) => {
    if (score.find((s) => s.id === rawScore.id)) {
      return setScore((old) => old.filter((s) => s.id !== rawScore.id))
    }
    setScore((old) => [...old, rawScore])
  }

  return (
    <main className="text-black min-h-screen flex flex-col justify-center items-center bg-white">
      <h1 className="text-center mb-8 text-4xl w-5/6 p-5">
        Escore de avaliação de risco de Caprini
        {score.reduce((acc, obj) => {
            return acc + obj.value;
          }, 0)}
      </h1>
      <form className="flex flex-col justify-between border w-5/6 lg:w-3/6 items-center">
        <legend className="text-center mb-8 text-3xl w-full p-5">
          Fatores de risco
        </legend>
        <Card handleScore={handleScore} score={score} menuPage={menuPage} />
        <section>
          <button type="button" className="w-12 bg-blue-600 disabled:bg-blue-200" onClick={() => setMenuPage((o) => o - 1)} disabled={menuPage <= 0}>
            {'<'}
          </button>
          <button type="button" className="w-12 bg-blue-600 disabled:bg-blue-200" onClick={() => setMenuPage((o) => o + 1)} disabled={menuPage >= 2}>
            {'>'}
          </button>
        </section>
      </form>
    </main>
  );
}

