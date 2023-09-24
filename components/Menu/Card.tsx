import React from 'react';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/24/outline';
import { CardFav } from '../types';


export default function Card({ cardInfo, handleFav }: CardFav) {
  return (
    <section className="relative">
      <Link href={`/menu/${cardInfo.link}`} className="border-2 mb-2 bg-gray-50 hover:bg-purple-100 hover:border-purple-300 rounded p-6 flex justify-between">
      <section className="text-start">
        <h3 className="text-lg">
          {cardInfo.title}
        </h3>
        <p className="text-gray-500">
          Calcula o risco de TEV em pacientes cirúrgicos
        </p>
      </section>
      </Link>
      {cardInfo.fav ?
        <button onClick={() => handleFav(cardInfo.id, false)} className="absolute z-10 top-2 right-2">
          <StarIcon fill="yellow" className="mx-auto text-black hover:text-gray-600 w-[36px] md:w-[26px]" width={26} />
        </button>
        :
        <button onClick={() => handleFav(cardInfo.id, true)} className="absolute z-10 top-2 right-2">
          <StarIcon fill="white" className="mx-auto text-gray-300 hover:text-purple-600 w-[36px] md:w-[26px]" width={26} />
        </button>
      }
    </section>
  );
}

