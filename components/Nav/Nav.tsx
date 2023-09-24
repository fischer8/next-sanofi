"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import InfoButton from '@/components/InfoButton/InfoButton';
import InfoModal from '@/components/InfoButton/InfoModal';
import cardInfo from '../Menu/info';
import Link from 'next/link';

export default function Nav({ title }: { title: string }) {
  const [showNav, setShowNav] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <section>
      <section className="bg-purple-300 p-4 md:ps-4 md:pe-4 absolute top-0 z-50 w-full">
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
            <h1 className="select-none font-bold md:text-2xl text-center">
              {title}
            </h1>
          </section>
          {showInfo ? <InfoModal handleShow={setShowInfo} /> : <InfoButton handleShow={setShowInfo} />}
        </section>
      </section>
      {showNav &&
        <nav className="fixed hidden md:flex flex-col justify-center items-center z-10 left-0 top-0 bottom-0 md:w-[350px] border bg-purple-100">
          {cardInfo.map((inf) => <Link className="p-5 hover:bg-purple-300 w-full" key={inf.id} href={inf.link}>{inf.title}</Link>)}
        </nav>
      }
    </section>
  );
}

