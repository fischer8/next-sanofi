"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import InfoButton from '@/components/InfoButton/InfoButton';
import InfoModal from '@/components/InfoButton/InfoModal';

export default function Nav({ title }: { title: string }) {
  const [showNav, setShowNav] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <section>
      <section className="bg-purple-300 flex justify-between items-center p-4 md:ps-4 md:pe-4 absolute top-0 z-50 w-full">
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
        <h1 className="select-none font-bold md:text-2xl mx-auto md:mx-0 text-center">
          {title}
        </h1>
      {showInfo ? <InfoModal handleShow={setShowInfo} /> : <InfoButton handleShow={setShowInfo} />}
      </section>
      {showNav &&
        <nav className="fixed hidden md:flex items-center z-10 left-0 top-0 bottom-0 right-[70%] lg:right-[80%] border bg-purple-100">
          <p className="w-full border">
            oi
            dadskngjdfkgjkfsdngjkdsfnvkjndfsvkjnfdkj
            dfjgk fegjkergjkrejgerjgrwejkn rjkehjgk hrjehjh ejk hẃ jhwj hgwje k d mgdna ẽjranf jernij nfaj rnfeo gfne[w]oi jgqeiqjigqjrengqiernghdiojfkf adsk hj asd hjsd hdsj hdsj hj sh dhsj hdsj hsj hdsj hdsj hdsh
          </p>
        </nav>
      }
    </section>
  );
}

