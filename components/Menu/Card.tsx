import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { Info } from '../types';


export default function Card({ cardInfo } : { cardInfo: Info }) {
  return (
    <section className="border rounded p-3 flex flex-col justify-between text-center items-center">
      <Image className="h-44 mb-4" src={cardInfo.img} alt={`Image ${cardInfo.id}`} width={250} height={200} />
      <section className="w-full"> 
        <h3 className="text-lg mb-2">
          {cardInfo.title}
       </h3>
        <Link href={`/menu/${cardInfo.link}`}>
          <button className="font-bold opacity-95 h-12 bg-purple-700 hover:bg-purple-900 w-5/6 text-white py-1 px-4 rounded">
            <ArrowLongRightIcon className="mx-auto" width={24} />
          </button>
        </Link>
      </section>
    </section>
  );
}

