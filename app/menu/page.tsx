"use client"
import { useState, useEffect } from 'react';
import Card from '@/components/Menu/Card';
import cardInfo from '@/components/Menu/info';
import Nav from '@/components/Nav/Nav';
import Footer from '@/components/Footer/Footer';

export default function Menu() {
  const [cards, setCards] = useState(cardInfo);
  const [loading, setLoading] = useState(false);

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
    <section className="text-center text-black md:flex items-center bg-white">
      <Nav pageName="" />
      <h1 className="text-2xl font-bold mt-8 mb-6 md:hidden">
        WebTEV
      </h1>
      <section className="flex md:mt-[130px] mx-auto flex-col w-11/12 lg:w-[800px] lg:px-2">
        {loading ? 'Carregando...' : cards.map((info) => <Card cardInfo={info} handleFav={handleFavorites} handleLoading={setLoading} key={info.id} />)}
      </section>
      <Footer />
    </section>
  );
}
