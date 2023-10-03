"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import InfoButton from '@/components/InfoButton/InfoButton';
import InfoModal from '@/components/InfoButton/InfoModal';
import cardInfo from '../Menu/info';
import Footer from '../Footer/Footer';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { Info } from '../types';

export default function Nav({ pageName }: { pageName: string }) {
  const [showNav, setShowNav] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [favorites, setFavorites] = useState<Info[] | false>(false)
  const [data, setData] = useState<{ crm: number, name: string }>({ crm: 0, name: "NOME NÃO ENCONTRADO" });

  useEffect(() => {
    const hasCards = localStorage.getItem('cards');
    const localCards = hasCards && JSON.parse(hasCards);
    if (localCards) {
      const navFavorites = localCards.filter(({ fav }: Info) => fav);
      setFavorites(navFavorites);
    } else {
      setFavorites(false);
    }
    const hasData = Cookies.get('data');
    const data = hasData && JSON.parse(hasData);
    setData(data);
  }, [])

  return (
    <section>
      <section className="hidden md:block">
        {!showInfo &&
          <section className="bg-purple-400 p-4 md:ps-4 md:pe-4 absolute top-0 z-50 w-full">
            <section className="flex justify-between items-center">
              <button onClick={() => setShowNav((old) => !old)} className="hidden md:block">
                <Image
                  src="/hamb_icon.webp"
                  width={40}
                  height={50}
                  alt="Menu"
                  placeholder="blur"
                  blurDataURL="/hamb_icon.webp"
                />
              </button>
              <section className="mx-auto md:mx-0">
                <Link href="/menu">
                  <h1 className="select-none font-bold cursor-pointer md:text-2xl text-center">
                    WebTEV
                  </h1>
                </Link>
              </section>
              <InfoButton handleShow={setShowInfo} />
            </section>
          </section>}
        {(showNav && !showInfo) &&
          <nav className="fixed hidden md:flex flex-col justify-center z-10 left-0 top-0 bottom-0 md:w-[350px] bg-purple-500">
            <section className="p-6 cursor-pointer select-none transition-colors duration-200 mb-2 bg-purple-400 hover:bg-purple-300 w-full text-start">
              <p className="mb-2">
                {data.name}
              </p>
              <h3>
                {`CRM: ${data.crm}`}
              </h3>
            </section>
            {favorites && favorites.map((inf: Info) => <Link className="p-5 select-none text-start w-full transition-colors bg-purple-300 mb-[1px] hover:bg-purple-300" key={inf.id} href={`/menu/${inf.link}`}>{inf.title}</Link>)}
            {cardInfo.map((inf) => <Link className="p-5 select-none text-start w-full transition-colors bg-purple-400 mb-[1px] hover:bg-purple-300" key={inf.id} href={`/menu/${inf.link}`}>{inf.title}</Link>)}
          </nav>
        }
        {showInfo && <InfoModal handleShow={setShowInfo} />}
      </section>
      {pageName &&
        <section className="hidden absolute md:flex text-purple-800 z-40 top-20 left-4">
          <Link className="text-blue-600 underline font-bold" href="/menu">
            Menu
          </Link>
          <Link href="/menu" className="ms-2" >
            {`> ${pageName}`}
          </Link>
        </section>
      }
      <Footer />
    </section>
  );
}

