"use client"
import React, { useState } from 'react';
import Image from 'next/image';

export default function Nav({ title }: { title: string }) {
  const [showNav, setShowNav] = useState(false);
  return (
    <section>
      <section className="bg-purple-300 flex items-center md:p-2 md:ps-4 md:pe-6 absolute z-20 top-0 w-full">
        <button onClick={() => setShowNav((old) => !old)} className="absolute z-20">
          <Image
            className="hidden md:block z-20"
            src="/hamb_icon.webp"
            width={50}
            height={50}
            alt="Menu"
            placeholder="blur"
            blurDataURL="/hamb_icon.webp"
          />
        </button>
        <h1 className="select-none p-4 text-center mx-auto">
          {title}
        </h1>
      </section>
      {showNav &&
        <nav className="absolute hidden align-middle md:block z-10 left-0 top-0 bottom-0 right-[60%] lg:right-[70%] border bg-purple-100">
          <section className="my-auto mx-auto border-red-600 flex flex-col align-middle items-center">
            <p className="">
              oi
              dadskngjdfkgjkfsdngjkdsfnvkjndfsvkjnfdkj
              dfjgk fegjkergjkrejgerjgrwejkn rjkehjgk hrjehjh ejk hẃ jhwj hgwje k d mgdna ẽjranf jernij nfaj rnfeo gfne[w]oi jgqeiqjigqjrengqiernghdiojfkf adsk hj asd hjsd hdsj hdsj hj sh dhsj hdsj hsj hdsj hdsj hdsh
            </p>
          </section>
        </nav>
      }
    </section>
  );
}

