"use client"
import { useState } from 'react';
import Back from '@/components/Back';
import Nav from '@/components/Nav/Nav';
//import InfoButton from '@/components/InfoButton/InfoButton';
//import InfoModal from '@/components/InfoButton/InfoModal';
import CapriniUl from '@/components/Caprini/CapriniUl'
import CapriniModal from '@/components/Caprini/CapriniModal';
import { ScoreObj } from '@/components/types';
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline';

export default function Avaliacao() {
  const [score, setScore] = useState<ScoreObj[]>([]);
  const [menuPage, setMenuPage] = useState(0);
  const [finalScore, setFinalScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  //const [showInfo, setShowInfo] = useState(false);
  const text = 'Escore de avaliação de risco de Caprini'

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
  <main>
  <Nav title={text}/>
    <main className="text-black absolute w-full top-0 bottom-0 md:relative md:min-h-screen flex justify-center items-center bg-white">
      {/*showInfo ? <InfoModal handleShow={setShowInfo} /> : <InfoButton handleShow={setShowInfo} />*/}
      <form onSubmit={handleSubmit} className="flex flex-col justify-evenly bg-white md:border rounded-lg md:shadow-lg p-4 w-full md:w-[400px] relative items-center">
        <legend className="text-center w-full">
        </legend>
        <CapriniUl handleScore={handleScore} score={score} menuPage={menuPage} />
        <section className="w-full flex flex-row mx-auto justify-between mb-2">
          <button type="button" className="rounded w-3/6 border select-none p-2 md:p-3 me-2 bg-purple-500 hover:bg-purple-800 disabled:bg-purple-200" onClick={() => setMenuPage((page) => page - 1)} disabled={menuPage <= 0}>
            <ArrowLongLeftIcon className="mx-auto select-none text-white" width={24} />
          </button>
          <button type="button" className="rounded w-3/6 p-2 select-none md:p-3 border bg-purple-500 hover:bg-purple-800 disabled:bg-purple-200" onClick={() => setMenuPage((page) => page + 1)} disabled={menuPage >= 2}>
            <ArrowLongRightIcon className="mx-auto select-none text-white" width={24} />
          </button>
        </section>
        <button className="p-2 select-none md:p-3 rounded bg-purple-500 text-white w-full mb-1 hover:bg-purple-700 font-bold" type="submit">Calcular Escore</button>
        {showResult && <CapriniModal score={finalScore} show={setShowResult} />}
      </form>
      <section className="hidden md:block w-3/12 md:ms-12">
        <h1 className="font-bold mb-2">
          Escore de avaliação de risco de Caprini
        </h1>
        <p className="mb-2">
          Para pacientes cirúrgicos
        </p>
        <p className="mb-5">
          O Escore de Caprini é uma ferramenta utilizada na avaliação de risco de trombose venosa profunda (TVP) em pacientes submetidos a cirurgias.
        </p>
        <p className="mb-5">
          Este teste não é adequado para pacientes médicos e requer interação presencial entre médico e paciente para coletar informações sobre fatores de risco históricos.
        </p>
        <p className="mb-5">
          Este escore foi validado em diversos tipos de pacientes cirúrgicos, abrangendo cirurgia geral, plástica, vascular, cabeça e pescoço, UTI cirúrgica, entre outros.
        </p>
        <p className="mb-5">
          Essa ferramenta ajuda os profissionais de saúde a identificar pacientes com maior risco de TVP e tomar medidas preventivas adequadas.
        </p>
      </section>
    </main>
  </main>
  );
}

