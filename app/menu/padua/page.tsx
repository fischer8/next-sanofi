"use client"
import { useState } from 'react';
import Back from '@/components/Back';
//import InfoButton from '@/components/InfoButton/InfoButton';
//import InfoModal from '@/components/InfoButton/InfoModal';
import PaduaUl from '@/components/Padua/PaduaUl';
import PaduaModal from '@/components/Padua/PaduaModal';
import { ScoreObj } from '@/components/types';

export default function Padua() {
  const [score, setScore] = useState<ScoreObj[]>([]);
  const [finalScore, setFinalScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
//const [showInfo, setShowInfo] = useState(false);

  const handleScore = (rawScore: ScoreObj) => {
    if (score.find((s) => s.id === rawScore.id)) {
      return setScore((old) => old.filter((s) => s.id !== rawScore.id));
    }
    setScore((old) => [...old, rawScore]);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const scoreSum = score.reduce((acc, obj) => {
      return acc + obj.value;
    }, 0)
    setFinalScore(scoreSum);
    setShowResult(true);
  }

  return (
    <main className="text-black absolute w-full top-0 bottom-0 md:relative md:min-h-screen flex justify-center items-center bg-white">
      <Back />
      {/*showInfo ? <InfoModal handleShow={setShowInfo} /> : <InfoButton handleShow={setShowInfo} />*/}
      <form onSubmit={handleSubmit} className="flex flex-col justify-evenly bg-white lg:border rounded-lg md:shadow-lg p-1 w-full md:p-12 md:w-5/6 lg:w-4/6 max-w-[1200px] items-center">
        <legend className="text-center w-full">
          <h1 className="md:text-4xl md:p-5 text-base font-bold mb-2 md:mb-0 md:block">
            Escore de Pádua 
          </h1>
        </legend>
        <PaduaUl handleScore={handleScore} score={score} />
        <button className="p-2 md:p-3 rounded bg-purple-500 text-white w-5/6 hover:bg-purple-700 font-bold" type="submit">Calcular Escore</button>
      </form>
      {showResult && <PaduaModal score={finalScore} show={setShowResult} />}
    </main>
  );
}

