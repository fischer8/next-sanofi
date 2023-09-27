"use client"
import { useState } from 'react';
import pdfDose from '@/components/JsPdf/pdfDose';
import Nav from '@/components/Nav/Nav';
import Back from '@/components/Back';

export default function Dose() {
  const [weight, setWeight] = useState(0);
  const [highLight, setHighLight] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setWeight(Number(e.target.value));

  const medicine = {
    name: 'Enoxaparina',
    dose: Math.floor((highLight ? 1.5 : 1) * weight),
    freq: highLight ? '1/24h' : '1/12h'
  };


  return (
    <main>
      <Nav pageName='dose' />
      <Back />
      <section className="text-black absolute md:mt-26 w-full pt-10 top-0 bottom-0 bg-white">
        <section className="flex md:mt-[70px] items-center justify-center mx-auto">
          <section className="hidden md:block w-[400px] me-6 lg:me-12">
            <h1 className="font-bold text-2xl mb-4">
              Calculo de dose para tratamento do tromboembolismo
            </h1>
            <p className="mb-5">
              O cálculo de dose para o tratamento do tromboembolismo, é uma parte crítica do manejo clínico dessa condição.
            </p>
            <p className="mb-5">
              O tratamento envolve anticoagulantes, que são medicamentos que afinam o sangue e impedem a formação de novos coágulos. O cálculo da dose correta é fundamental para evitar hemorragias ou subtratamento.
            </p>
          </section>
          <form className="flex flex-col md:relative justify-center md:justify-evenly bg-white md:border rounded-lg md:shadow-lg p-4 w-full md:w-[400px] md:h-fit items-center">
            <Back />
            <p className="bg-blue-200 w-full rounded-t text-center p-2">
              Profilaxia
            </p>
            <section className="flex w-full justify-evenly">
              <p className="mb-4 p-2 py-9 bg-blue-100 rounded-bl w-full text-center">
                Enoxaparina 40mg
              </p>
              <p className="mb-4 p-2 py-4 bg-orange-200 w-full rounded-ee text-center">
              <b>Insulficiência renal<br/> (grave)</b><br/>
                Enoxaparina 20mg
              </p>
            </section>
            <legend className="bg-blue-200 w-full rounded-t text-center p-2">
              Cálculo de Dose
            </legend>
            <section className="bg-blue-100 w-full text-center py-2">
              Peso:
              <input onChange={handleChange} className="w-[50px] ms-1 me-1 bg-gray-100 border text-end" type="number" value={weight === 0 ? '' : weight} />
              Kg
            </section>
            <p className="mb-2 pb-4 bg-blue-100 w-full rounded-b text-center">
              {`Enoxaparina ${medicine.dose}mg`}
            </p>
            <section className="w-full flex flex-row mx-auto justify-between mb-2">
              <button onClick={() => setHighLight((old) => !old)} style={{ opacity: highLight ? 1 : 0.5 }} type="button" className="rounded w-3/6 text-white border select-none p-2 md:p-3 me-2 bg-purple-500 md:hover:bg-purple-800 disabled:bg-purple-200">
                1,5mg/kg -
                24h
              </button>
              <button onClick={() => setHighLight((old) => !old)} style={{ opacity: highLight ? 0.5 : 1 }} type="button" className="rounded w-3/6 text-white p-2 select-none md:p-3 border bg-purple-500 md:hover:bg-purple-800 disabled:bg-purple-200">
                1mg/kg -
                12h
              </button>
            </section>
            <button onClick={() => pdfDose(medicine)} className="p-2 select-none md:p-3 rounded bg-purple-500 text-white w-full mb-1 md:hover:bg-purple-700" type="button">Gerar PDF</button>
          </form>
        </section>
      </section>
    </main>
  );
}

