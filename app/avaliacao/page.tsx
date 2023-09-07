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
      <form onSubmit={handleSubmit} className="flex flex-col relative justify-evenly bg-white md:border rounded-lg md:shadow-lg p-1 w-full md:p-12 md:w-5/6 lg:w-3/6 items-center">
        <legend className="text-center mb-2 text-3xl w-full p-5">
          <h1 className="text-center md:text-4xl md:p-5 text-xl md:block">
            Escore de avaliação de risco de Caprini
          </h1>
          <h1 className="hidden text-xl">
            Fatores de risco
          </h1>
        </legend>
        <CapriniUl handleScore={handleScore} score={score} menuPage={menuPage} />
        <section className="text-center lg:w-3/6 w-4/6">
          <button type="button" className="rounded w-2/6 border p-3 me-2 bg-purple-600 hover:bg-purple-900 disabled:bg-purple-100" onClick={() => setMenuPage((o) => o - 1)} disabled={menuPage <= 0}>
            <ArrowLongLeftIcon className="mx-auto" width={24} />
          </button>
          <button type="button" className="rounded w-2/6 p-3 border bg-purple-600 hover:bg-purple-900 disabled:bg-purple-100" onClick={() => setMenuPage((o) => o + 1)} disabled={menuPage >= 2}>
            <ArrowLongRightIcon className="mx-auto" width={24} />
          </button>
        </section>
        {menuPage === 2 && <button className="w-20 absolute bottom-3 right-3 bg-purple-600" type="submit">Calcular</button>}
        {finalScore > 0 && finalScore}
      </form>
    </main>
  );
}

