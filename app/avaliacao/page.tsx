"use client"
import { useState } from 'react';
import CapriniUl from '@/components/Caprini/CapriniUl'
import { ScoreObj } from '@/components/types';
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline';

export default function Avaliacao() {
  const [score, setScore] = useState<ScoreObj[]>([]);
  const [menuPage, setMenuPage] = useState(0)
  const [finalScore, setFinalScore] = useState(0)

  const handleScore = (rawScore: ScoreObj) => {
    if (score.find((s) => s.id === rawScore.id)) {
      return setScore((old) => old.filter((s) => s.id !== rawScore.id))
    }
    setScore((old) => [...old, rawScore])
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const scoreSum = score.reduce((acc, obj) => {
      return acc + obj.value
    }, 0)
    setFinalScore(scoreSum)
  }

  return (
    <main className="text-black min-h-screen flex flex-col justify-center items-center bg-white">
      <h1 className="text-center mb-8 text-4xl w-5/6 p-5 hidden md:block">
        Escore de avaliação de risco de Caprini
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col relative justify-between bg-white border rounded-lg shadow-lg p-12 w-full md:p-12 md:w-5/6 lg:w-3/6 items-center">
        <legend className="text-center mb-8 text-3xl w-full p-5">
          Fatores de risco
        </legend>
        <CapriniUl handleScore={handleScore} score={score} menuPage={menuPage} />
        <section className="text-center lg:w-3/6 w-4/6">
          <button type="button" className="rounded w-2/6 p-3 me-2 bg-purple-500 hover:bg-purple-700 disabled:bg-purple-300" onClick={() => setMenuPage((o) => o - 1)} disabled={menuPage <= 0}>
            <ArrowLongLeftIcon className="mx-auto" width={24} />
          </button>
          <button type="button" className="rounded w-2/6 p-3 bg-purple-500 hover:bg-purple-700 disabled:bg-purple-300" onClick={() => setMenuPage((o) => o + 1)} disabled={menuPage >= 2}>
            <ArrowLongRightIcon className="mx-auto" width={24} />
          </button>
        </section>
        {menuPage === 2 && <button className="w-20 absolute bottom-3 right-3 bg-purple-600" type="submit">Calcular</button>}
        {finalScore > 0 && finalScore}
      </form>
    </main>
  );
}

