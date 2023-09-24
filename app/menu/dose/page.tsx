import React from 'react';
import Nav from '@/components/Nav/Nav';

export default function Dose() {
  const text = "Dose para tratamento do tromboembolismo venoso com ou sem embolia pulmonar";
  return (
    <main>
      <Nav title={text} />
    </main>
  );
}

