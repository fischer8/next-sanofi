import React from 'react';
import Card from '@/components/Card/Card';
import cardInfo from '@/components/Card/info';

export default function Menu() {
  return (
    <main className="text-black min-h-screen flex flex-col justify-center items-center bg-white">
      <h1 className="text-center text-2xl md:text-4xl font-bold mb-2 md:mb-8 mt-2 md:mt-0 md:text-4x1 w-5/6 p-5">
        Recomendações para a profilaxia e tratamento da TEV
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardInfo.map((info) => <Card cardInfo={info} key={info.id}/>)}
      </section>
    </main>
  );
}
