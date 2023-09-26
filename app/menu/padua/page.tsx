"use client"
import { useState } from 'react';
import Nav from '@/components/Nav/Nav';
import PaduaUl from '@/components/Padua/PaduaUl';
import PaduaModal from '@/components/Padua/PaduaModal';
import { ScoreObj } from '@/components/types';
import Back from '@/components/Back';

export default function Avaliacao() {
  const [score, setScore] = useState<ScoreObj[]>([]);
  const [finalScore, setFinalScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

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

  const handleShow = () => {
    setScore([])
    setShowResult(false)
  }

  return (
    <main>
      <Nav pageName="Padua" />
      <Back />
      <section className="text-black absolute md:mt-26 w-full pt-10 top-0 bottom-0 bg-white">
        <section className="flex md:mt-[70px] items-center justify-center mx-auto">
          <section className="hidden md:block w-[400px] me-6 lg:me-12">
            <h1 className="font-bold text-2xl mb-4">
              Escore de Padua
            </h1>
            <h1 className="font-bold mb-2">
              Para pacientes cirúrgicos
            </h1>
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
          <form onSubmit={handleSubmit} className="flex flex-col md:relative justify-center md:justify-evenly bg-white md:border rounded-lg md:shadow-lg p-4 w-full md:w-[400px] md:h-fit items-center">
            <Back />
            <legend className="mb-4 md:hidden font-bold">
              Escore de padua
            </legend>
            <PaduaUl handleScore={handleScore} score={score} />
            <button className="p-2 select-none md:p-3 rounded bg-purple-500 text-white w-full mb-1 hover:bg-purple-700 font-bold" type="submit">Calcular Escore</button>
            {showResult && <PaduaModal score={finalScore} show={handleShow} />}
          </form>
        </section>
      </section>
    </main>
  );
}

