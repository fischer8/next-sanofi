import React from 'react';
import Image from 'next/image'
import { ShowInfo } from '@/components/types'

export default function InfoModal({ handleShow }: ShowInfo) {
  return (
    <section className="absolute z-50 top-0 bottom-0 w-full md:bg-opacity-90 flex items-center align-middle md:bg-black">
      <section className="absolute top-0 bottom-0 md:static md:py-8 md:w-[500px] md:border rounded-2xl md:mx-auto bg-white flex flex-col items-center justify-center">
        <Image
          alt='logo sanofi'
          src='/sanofi-logo.png'
          width={200}
          height={300}
          className='mx-auto'
        />
        <h2 className="font-bold text-4x1 md:text-xl mb-2">
          WebTEV
        </h2>
        <section className="flex flex-col text-center items-center w-5/6 md:w-[350px] h-54 mb-5">
          <p className="mb-1 text-gray-600">
            Bem-vindo ao serviço WebTEV, que tem por objetivo orientar para adequada profilaxia e tratamento da Trombose Venosa Profunda (TEV).
          </p>
          <p className="mb-4 text-gray-600">
            As informações contidas neste serviço web são direcionadas exclusivamente ao profissional de saúde autorizado a prescrever ou dispensar medicamentos no Brasil.
          </p>
          <p className="mb-8 text-gray-600 font-bold">
            Ao usar esse serviço você declara ser um profissional médico.
          </p>
          <button onClick={() => handleShow(false)} className="bg-purple-500 mb-2 w-full md:w-5/6 hover:bg-purple-800 text-white py-2 rounded">
            Termos e Condições
          </button>
          <button onClick={() => handleShow(false)} className="bg-purple-500 w-full md:w-5/6 hover:bg-purple-800 text-white py-2 rounded">
            Fechar
          </button>
        </section>
      </section>
    </section>
  );
}

