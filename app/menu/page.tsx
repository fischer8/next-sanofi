"use client"
import { useState, useEffect } from 'react';
import Card from '@/components/Menu/Card';
import cardInfo from '@/components/Menu/info';
import Nav from '@/components/Nav/Nav';
import Footer from '@/components/Footer/Footer';

export default function Menu() {
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
    <section className="text-center text-black min-h-screen md:flex items-center bg-white">
      <Nav />
      <h1 className="text-2xl mb-4 md:hidden">
        WebTEV
      </h1>
      <section className="flex mx-auto flex-col w-11/12 lg:w-4/6 lg:px-2">
        {cards.map((info) => <Card cardInfo={info} handleFav={handleFavorites} key={info.id} />)}
      </section>
      <Footer />
    </section>
  );
}
