import React from 'react';
import Image from 'next/image';

export default function Dose() { 
  return ( 
    <main>
    <section className="lg:bg-purple-300 flex items-center p-2 ps-4 pe-6">
      <Image src="/hamb_icon.webp" width={50} height={90} alt="Menu"/>
      <h1 className="lg:w-3/6 p-5 font-bold text-center mx-auto">
        Dose para tratamento do tromboembolismo venoso com ou sem embolia pulmonar
      </h1>
    </section>
    </main>
  );
}

