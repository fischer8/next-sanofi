import React from 'react';
import Nav from '@/components/Nav/Nav';
import Card from '@/components/Card/Card';
import cardInfo from '@/components/Card/info';

export default function Menu() {
  return (
    <main className="text-black min-h-screen flex flex-col justify-center items-center bg-white">
      <h1 className="text-center mb-8 text-4xl w-5/6 p-5">
        Recomendações para a profilaxia e tratamento da TEV
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-2">
        {cardInfo.map((info) => <Card cardInfo={info} key={info.id}/>)}
      </section>
    </main>
  );
}
