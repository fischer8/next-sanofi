"use client"
import { useState } from 'react';
import Back from '@/components/Back/Back';
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
    <main className="text-black min-h-screen flex justify-center items-center bg-white">
      <Back />
      <form onSubmit={handleSubmit} className="flex flex-col relative justify-evenly bg-white lg:border rounded-lg md:shadow-lg p-1 w-full md:p-12 md:w-5/6 lg:w-4/6 items-center">
        <legend className="text-center w-full ">
          <h1 className="md:text-4xl md:p-5 text-base font-bold mb-2 md:mb-0 md:block">
            Escore de avaliação de risco de Caprini
          </h1>
        </legend>
        <CapriniUl handleScore={handleScore} score={score} menuPage={menuPage} />
        <section className="w-5/6 flex flex-row mx-auto justify-between mb-3">
          <button type="button" className="rounded w-3/6 border p-2 md:p-3 me-2 bg-purple-500 hover:bg-purple-800 disabled:bg-purple-100" onClick={() => setMenuPage((o) => o - 1)} disabled={menuPage <= 0}>
            <ArrowLongLeftIcon className="mx-auto text-white" width={24} />
          </button>
          <button type="button" className="rounded w-3/6 p-2 md:p-3 border bg-purple-500 hover:bg-purple-800 disabled:bg-purple-100" onClick={() => setMenuPage((o) => o + 1)} disabled={menuPage >= 2}>
            <ArrowLongRightIcon className="mx-auto text-white" width={24} />
          </button>
        </section>
        <button className="p-2 md:p-3 rounded bg-purple-500 text-white w-5/6 hover:bg-purple-800 font-bold" type="submit">Calcular</button>
      </form>
    </main>
  );
}

