import React from 'react';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/24/outline';
import { CardFav } from '../types';


export default function Card({ cardInfo, handleFav, handleLoading }: CardFav) {
  return (
    <section className="relative">
      <Link onClick={() => handleLoading(true)} href={`/menu/${cardInfo.link}`} className="border-2 mb-2 bg-gray-50 md:hover:bg-purple-100 md:hover:border-purple-300 rounded p-6 flex justify-between">
      <section className="text-start">
        <h3 className="select-none text-md">
          {cardInfo.title}
        </h3>
        <p className="select-none text-sm md:text-base text-gray-500">
          {cardInfo.desc}
        </p>
      </section>
      </Link>
      {cardInfo.fav ?
        <button onClick={() => handleFav(cardInfo.id, false)} className="absolute z-10 top-2 right-2">
          <StarIcon className="mx-auto fill-purple-600 text-black opacity-50 md:hover:opacity-100 w-[28px] md:w-[26px]" width={26} />
        </button>
        :
        <button onClick={() => handleFav(cardInfo.id, true)} className="absolute z-10 top-2 right-2">
          <StarIcon className="mx-auto text-gray-300 md:hover:text-purple-600 w-[28px] md:w-[26px]" width={26} />
        </button>
      }
    </section>
  );
}

