"use client"
import { useState } from 'react';
import Card from '@/components/Menu/Card';
import cardInfo from '@/components/Menu/info';
import InfoButton from '@/components/InfoButton/InfoButton';
import InfoModal from '@/components/InfoButton/InfoModal';

export default function Menu() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <section className="text-center text-black min-h-screen flex flex-col justify-center items-center bg-white">
      {showInfo ? <InfoModal handleShow={setShowInfo} /> : <InfoButton handleShow={setShowInfo} />}
      <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-8 mt-2 md:mt-0 md:text-4x1 w-5/6 p-5">
        Recomendações para a profilaxia e tratamento da TEV
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardInfo.map((info) => <Card cardInfo={info} key={info.id} />)}
      </section>
    </section>
  );
}
