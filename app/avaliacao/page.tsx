"use client"
import { useState } from 'react';
import Card from '@/components/Caprini/Card'
import { ScoreObj } from '@/components/types';

export default function Caprini() {
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
    console.log(typeof e)
    const scoreSum = score.reduce((acc, obj) => {
      return acc + obj.value
    }, 0)
    setFinalScore(scoreSum)
  }

  return (
    <main className="text-black min-h-screen flex flex-col justify-center items-center bg-white">
      <h1 className="text-center mb-8 text-4xl w-5/6 p-5">
        Escore de avaliação de risco de Caprini
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col justify-between border w-5/6 lg:w-3/6 items-center">
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
        {menuPage === 2 && <button className="w-20 bg-blue-600" type="submit">Calcular</button>}
        {finalScore > 0 && finalScore}
      </form>
    </main>
  );
}

