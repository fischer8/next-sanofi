import Nav from '@/components/Nav/Nav';
import Back from '@/components/Back';
import Link from "next/link";

export default function Profilaxia() {
  return (
    <main>
      <Nav pageName='Profilaxia' />
      <Back />
      <section className="text-black absolute md:mt-26 w-full pt-10 top-0 bottom-0 bg-white">
        <section className="flex md:mt-[70px] items-center justify-center mx-auto">
          <section className="md:p-0 md:text-start w-11/12 md:w-[800px]">
            <ul className="mt-12 mb-4 md:mt-8 text-blue-600 underline ">
              <Link className="me-4" href="/menu/profilaxia#caprini">
                Caprini
              </Link>
              <Link className="me-4" href="/menu/profilaxia#padua">
                Padua
              </Link>
              <Link className="me-4" href="/menu/profilaxia#posologia">
                Posologia
              </Link>
              <Link href="/menu/profilaxia#profilaxia">
                Profilaxia
              </Link>
            </ul>
            <p id="posologia" className="mb-4  text-2xl">
              Posologia
            </p>
            <section className="flex mb-4">
              <section className="flex p-6 text-center flex-col justify-evenly w-full bg-orange-200 border rounded">
                <p className="mb-1 font-bold">Risco Intermediário</p>
                <p className="text-sm">HNF 5000UI, SC 2 vezes ao dia / Enoxaparina 20mg, SC 1 vez ao dia / Dalteparina 2500UI, SC 1 vez ao dia</p>
              </section>
              <section className="flex p-6 text-center flex-col justify-evenly w-full bg-red-200 border rounded">
                <p className="mb-1 font-bold">Risco Alto</p>
                <p className="text-sm">HNF 5000UI, SC 3 vezes ao dia / Enoxaparina 40mg, SC 1 vez ao dia / Dalteparina 5000UI, SC 1 vez ao dia</p>
              </section>
            </section>
            <p className="mb-2">
              Tempo de profilaxia recomendado:
            </p>
            <section className="flex flex-col md:flex-row text-center w-full mb-12">
              <section className="flex flex-col px-2 justify-center w-full bg-blue-200 border rounded py-4">
                <p className="mb-1 font-bold">ATQ e Fratura de quadril</p>
                <p className="text-sm ">4 a 5 semanas</p>
              </section>
              <section className="flex px-6 flex-col justify-evenly w-full bg-blue-200 border rounded py-4">
                <p className="mb-1 font-bold">ATJ</p>
                <p className="text-sm ">Pelo menos 10 dias</p>
              </section>
              <section className="flex flex-col px-6 justify-evenly w-full bg-blue-200 border rounded py-4">
                <p className="mb-1 font-bold">Oncológica</p>
                <p className="text-sm ">3 a 4 semanas</p>
              </section>
              <section className="flex flex-col px-6 justify-evenly w-full bg-blue-200 border rounded py-4">
                <p className="mb-1 font-bold">Politrauma e TRM</p>
                <p className="text-sm ">Até recuperação</p>
              </section>
              <section className="flex flex-col px-6 justify-evenly w-full bg-blue-200 border rounded py-4">
                <p className="mb-1 font-bold">Demais</p>
                <p className="text-sm ">7 a 10 dias</p>
              </section>
            </section>
            <p id='profilaxia' className="text-2xl mb-2">
              Profilaxia
            </p>
            <p className="bg-blue-200 w-full rounded-t text-center p-2">
              Dose para profilaxia de TEV
            </p>
            <section className="flex w-full mb-8 justify-evenly">
              <p className="mb-4 p-2 py-9 bg-blue-100 rounded-bl w-full text-center">
                Enoxaparina 40mg
              </p>
              <p className="mb-4 p-2 py-4 bg-orange-200 w-full rounded-ee text-center">
                <b>Insulficiência renal<br /> (grave)</b><br />
                Enoxaparina 20mg
              </p>
            </section>
            <p id="caprini" className="text-2xl  mb-2">
              Escore de Caprini
            </p>
            <p className="mb-5">
              O Escore de Caprini é uma ferramenta utilizada na avaliação de risco de trombose venosa profunda (TVP) em pacientes submetidos a cirurgias.
              Este teste não é adequado para pacientes médicos e requer interação presencial entre médico e paciente para coletar informações sobre fatores de risco históricos.
            </p>
            <p className="mb-10">
              Este escore foi validado em diversos tipos de pacientes cirúrgicos, abrangendo cirurgia geral, plástica, vascular, cabeça e pescoço, UTI cirúrgica, entre outros.
              Essa ferramenta ajuda os profissionais de saúde a identificar pacientes com maior risco de TVP e tomar medidas preventivas adequadas.
            </p>
            <h2 className="md:text-2xl mb-2">
              Profilaxia baseada no Escore de Caprini:
            </h2>
            <section className="flex flex-col mx-auto md:flex-row text-center w-full">
              <section className="flex md:py-4 flex-col justify-evenly md:justify-center w-full bg-blue-100 border rounded py-4">
                <p className="mb-1 font-bold">{'Escore <1 Risco Muito Baixo'}</p>
                <p className="text-sm">Deambulação precoce</p>
              </section>
              <section className="flex flex-col justify-evenly md:justify-center w-full bg-blue-200 border rounded py-4">
                <p className="mb-1 font-bold">Escore 1-2 Risco Baixo</p>
                <p className="text-sm">Profilaxia mecânica (CPI)</p>
              </section>
              <section className="flex flex-col md:py-4 justify-evenly md:justify-center w-full bg-orange-200 border rounded py-4">
                <p className="mb-1 font-bold">Escore 3-4 Risco Moderado</p>
                <p className="text-sm">Profilaxia farmacológica (HNF ou HBPM)</p>
              </section>
            </section>
            <section className="flex mb-14 px-6 md:px-14 text-center flex-col justify-evenly w-full bg-red-200 border rounded p-4">
              <p className="mb-1 font-bold">Escore ≥5 Risco Alto</p>
              <p className="text-sm">Profilaxia farmacológica (HNF ou HBPM) + profilaxia mecânica (CPI ou meias antitrombo). Pacientes de alto risco submetidos à cirurgia oncológica abdominal e pélvica: estender a profilaxia por 4 semanas</p>
            </section>
            <p id="padua" className="text-2xl mb-2">
              Escore de Padua
            </p>
            <p className="mb-2">
              O escore de Padua pode ser aplicado em pacientes hospitalizados que apresentam risco potencial de TEV.
              O escore de predição de Pádua identifica pacientes internados que podem apresentar alto risco de tromboembolismo venoso (TEV) e que se beneficiariam de tromboprofilaxia.
            </p>
            <p className="mb-10">
              A maior parte dos pacientes que desenvolveram TEV tinham câncer ativo.
              O teste de TEV como acompanhamento é realizado se o paciente for sintomático.
              Pacientes com contraindicações à profilaxia não foram incluídos no estudo.
              Essa ferramenta ajuda os profissionais de saúde a identificar pacientes com maior risco de TVP e tomar medidas preventivas adequadas.
            </p>
            <h2 className="md:text-2xl mb-2">
              Profilaxia baseada no Escore de Padua:
            </h2>
            <section className="flex flex-col md:flex-row text-center w-full mb-12">
              <section className="flex flex-col px-2 justify-center w-full bg-blue-100 border rounded py-4">
                <p className="mb-1 font-bold">Escore 0-2 Risco muito Baixo</p>
                <p className=" text-sm">Deambulação precoce</p>
              </section>
              <section className="flex px-6 flex-col justify-evenly w-full bg-orange-200 border rounded py-4">
                <p className="mb-1 font-bold">Escore 3 Risco Baixo</p>
                <p className="text-sm">Para pacientes com baixo risco de TEV, recomenda-se contra o uso de tromboprofilaxia farmacológica ou mecânica</p>
              </section>
              <section className="flex flex-col px-6 justify-evenly w-full bg-red-200 border rounded py-4">
                <p className="mb-1 font-bold">Escore ≥4 Risco Alto</p>
                <p className="text-sm">Tromboprofilaxia farmacológica com HBPM, HNF (de 12-12h ou 8-8h) ou fondaparina</p>
              </section>
            </section>
            <section className="mb-[500px]">
            </section>

          </section>
        </section>
      </section>
    </main>
  );
}


