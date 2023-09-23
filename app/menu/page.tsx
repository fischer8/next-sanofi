"use client"
import { useState, useEffect } from 'react';
import Card from '@/components/Menu/Card';
import cardInfo from '@/components/Menu/info';
import InfoButton from '@/components/InfoButton/InfoButton';
import InfoModal from '@/components/InfoButton/InfoModal';

export default function Menu() {
  const [showInfo, setShowInfo] = useState(false);
  const [cards, setCards] = useState(cardInfo);

  useEffect(() => {
    const hasCards = localStorage.getItem('cards');
    const localCards = hasCards ? JSON.parse(hasCards) : cardInfo;
    setCards([...localCards]);
  }, [])


  const handleFavorites = (id: number, bool: boolean) => {
    const hasCards = localStorage.getItem('cards');
    const localCards = hasCards ? JSON.parse(hasCards)! : cardInfo;
    localCards[id].fav = bool;
    localStorage.setItem("cards", JSON.stringify(localCards));
    setCards([...localCards]);
  }


  return (
    <section className="text-center text-black min-h-screen bg-white">
      {showInfo ? <InfoModal handleShow={setShowInfo} /> : <InfoButton handleShow={setShowInfo} />}
      <h1 className="text-2xl lg:pt-20 md:text-4xl md:mt-6 font-bold mb-2 mx-auto md:mb-8 mt-6 md:text-4x1 p-5">
        Profilaxia e tratamento da TEV
      </h1>
      <section className="flex mx-auto flex-col w-11/12 lg:w-5/12">
        {cards.map((info) => <Card cardInfo={info} handleFav={handleFavorites} key={info.id} />)}
      </section>
    </section>
  );
}
