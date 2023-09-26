"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import InfoButton from '@/components/InfoButton/InfoButton';
import InfoModal from '@/components/InfoButton/InfoModal';
import cardInfo from '../Menu/info';
import Link from 'next/link';
import Cookies from 'js-cookie';

export default function Nav({ title }: { title: string }) {
  const [showNav, setShowNav] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const hasData = Cookies.get('data');

  const data = hasData && JSON.parse(hasData)

  return (
    <section className="hidden md:block">
      {!showInfo && <section className="bg-purple-400 p-4 md:ps-4 md:pe-4 absolute top-0 z-50 w-full">
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
            <h1 className="select-none md:text-2xl text-center">
              {title}
            </h1>
          </section>
          <InfoButton handleShow={setShowInfo} />
        </section>
      </section>}
      {(showNav && !showInfo) &&
        <nav className="fixed hidden md:flex flex-col justify-center z-10 left-0 top-0 bottom-0 md:w-[350px] bg-purple-500">
          <section className="p-10 transition-colors duration-200 mb-2 bg-purple-400 hover:bg-purple-300 w-full text-start">
            <p className="mb-2">
              {data.name}
            </p>
            <h3>
              {`CRM: ${data.crm}`}
            </h3>
          </section>
          <Link className="p-5 text-start w-full transition-colors bg-purple-400 mb-[1px] hover:bg-purple-300" href="/menu">Menu</Link>
          {cardInfo.map((inf) => <Link className="p-5 text-start w-full transition-colors bg-purple-400 mb-[1px] hover:bg-purple-300" key={inf.id} href={inf.link}>{inf.title}</Link>)}
        </nav>
      }
      {showInfo && <InfoModal handleShow={setShowInfo} />}
    </section>
  );
}

