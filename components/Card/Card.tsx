import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Info = {
  cardInfo: {
    id: number,
    img: string,
    link: string,
    btn: string,
    title: string,
  }
}

export default function Card(props: Info) {
  const { cardInfo } = props;
  return (
    <section className="border rounded p-3 flex flex-col justify-between text-center items-center">
      <Image className="h-44 mb-4" src={cardInfo.img} alt={`Image ${cardInfo.id}`} width={250} height={200} />
      <section>
        <h3 className="mb-2">
          {cardInfo.title}
        </h3>
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded">
          <Link href={`/${cardInfo.link}`}>{cardInfo.btn}</Link>
        </button>
      </section>
    </section>
  );
}

