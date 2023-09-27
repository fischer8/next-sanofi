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
            <ul className="mb-12 text-blue-600 underline ">
              <Link className="me-4" href="/menu/profilaxia#caprini">
                Caprini
              </Link>
              <Link className="me-4" href="/menu/profilaxia#padua">
                Padua
              </Link>
              <Link href="/menu/profilaxia#posologia">
                Posologia
              </Link>
            </ul>
            <p id="posologia" className="mb-4  text-2xl">
              Posologia
            </p>
            <section className="flex mb-12">
              <section className="flex p-6 text-center flex-col justify-evenly w-full bg-orange-200 border rounded">
                <p className="mb-1 font-bold">Risco Intermediário</p>
                <p className="text-sm">HNF 5000UI, SC 2 vezes ao dia / Enoxaparina 20mg, SC 1 vez ao dia / Dalteparina 2500UI, SC 1 vez ao dia</p>
              </section>
              <section className="flex p-6 text-center flex-col justify-evenly w-full bg-red-200 border rounded">
                <p className="mb-1 font-bold">Risco Alto</p>
                <p className="text-sm">Risco Intermediário: HNF 5000UI, SC 2 vezes ao dia / Enoxaparina 20mg, SC 1 vez ao dia / Dalteparina 5000UI, SC 1 vez ao dia</p>
              </section>
            </section>
            <p id="caprini" className="text-2xl  mb-5">
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
            <h2 className="md:text-2xl mb-4">
              Profilaxia baseada no Escore de Caprini:
            </h2>
            <section className="flex flex-col mx-auto md:flex-row text-center w-full">
              <section className="flex md:py-4 flex-col justify-evenly md:justify-center w-full bg-blue-100 border rounded py-2">
                <p className="mb-1 font-bold">{'Escore <1 Risco Muito Baixo'}</p>
                <p className="text-sm">Deambulação precoce</p>
              </section>
              <section className="flex flex-col justify-evenly md:justify-center w-full bg-blue-200 border rounded py-2">
                <p className="mb-1 font-bold">Escore 1-2 Risco Baixo</p>
                <p className="text-sm">Profilaxia mecânica (CPI)</p>
              </section>
              <section className="flex flex-col md:py-4 justify-evenly md:justify-center w-full bg-orange-200 border rounded py-2">
                <p className="mb-1 font-bold">Escore 3-4 Risco Moderado</p>
                <p className="text-sm">Profilaxia farmacológica (HNF ou HBPM)</p>
              </section>
            </section>
            <section className="flex mb-14 md:p-6 md:px-14 text-center flex-col justify-evenly w-full bg-red-200 border rounded p-2">
              <p className="mb-1 font-bold">Escore ≥5 Risco Alto</p>
              <p className="text-sm">Profilaxia farmacológica (HNF ou HBPM) + profilaxia mecânica (CPI ou meias antitrombo). Pacientes de alto risco submetidos à cirurgia oncológica abdominal e pélvica: estender a profilaxia por 4 semanas</p>
            </section>
            <p id="padua" className="text-2xl mb-4">
              Escore de Padua
            </p>
            <p className="mb-5">
              O escore de Padua pode ser aplicado em pacientes hospitalizados que apresentam risco potencial de TEV.
              O escore de predição de Pádua identifica pacientes internados que podem apresentar alto risco de tromboembolismo venoso (TEV) e que se beneficiariam de tromboprofilaxia.
            </p>
            <p className="mb-10">
              A maior parte dos pacientes que desenvolveram TEV tinham câncer ativo.
              O teste de TEV como acompanhamento é realizado se o paciente for sintomático.
              Pacientes com contraindicações à profilaxia não foram incluídos no estudo.
              Essa ferramenta ajuda os profissionais de saúde a identificar pacientes com maior risco de TVP e tomar medidas preventivas adequadas.
            </p>
            <h2 className="md:text-2xl mb-4">
              Profilaxia baseada no Escore de Padua:
            </h2>
            <section className="flex flex-col md:flex-row text-center w-full mb-2">
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
            <section className="mb-[400px]">
            </section>





          </section>
        </section>
      </section>
    </main>
  );
}


