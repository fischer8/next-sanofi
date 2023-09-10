import React from 'react';
import Image from 'next/image'
import { ShowInfo } from '@/components/types'

export default function InfoModal({ handleShow }: ShowInfo) {
  return (
    <section className="absolute z-20 top-0 bottom-0 w-full md:bg-opacity-80 flex items-center align-middle md:bg-black">
      <section className="absolute top-0 bottom-0 md:py-20 md:static w-full md:w-4/6 lg:w-5/12 md:border rounded-2xl md:mx-auto bg-white flex flex-col items-center justify-center">
        <Image
          alt='logo sanofi'
          src='/sanofi-logo.png'
          width={200}
          height={300}
          className='mx-auto'
        />
        <h2 className="font-bold text-4x1 md:text-xl mb-5 pb-5">
          webTEV
        </h2>
        <section className="flex flex-col text-center items-center w-5/6 md:w-4/6 h-54 mb-5">
          <p className="mb-4 text-gray-600">
            Bem-vindo ao serviço webTEV, que tem por objetivo orientar para adequada profilaxia e tratamento da Trombose Venosa Profunda (TEV).
          </p>
          <p className="mb-4 text-gray-600">
            As informações contidas neste serviço web são direcionadas exclusivamente ao profissional de saúde autorizado a prescrever ou dispensar medicamentos no Brasil.
          </p>
          <p className="mb-10 text-gray-600 font-bold">
            Ao usar esse serviço você declara ser um profissional médico.
          </p>
          <button onClick={() => handleShow(false)} className="bg-purple-500 mb-4 w-full md:w-5/6 hover:bg-purple-800 text-white py-2 md:py-4 rounded">
            Termos e Condições
          </button>
          <button onClick={() => handleShow(false)} className="bg-purple-500 w-full md:w-5/6 hover:bg-purple-800 text-white py-2 md:py-4 rounded">
            Fechar
          </button>
        </section>
      </section>
    </section>
  );
}

