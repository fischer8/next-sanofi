import React from 'react';
import questions from './questions';
import { Prop } from '../types';

export default function CapriniUl({ handleScore, score, menuPage }: Prop) {
  const allQuestions = questions.map(({ id, ask, value }) => {
    const isChecked = score.some((s) => s.id === id);
    return (
      <li className="mb-2 border flex flex-row justify-between" key={id}>
        <input className="appearance-none border w-1/12 cursor-pointer me-px md:me-2 checked:bg-purple-500" checked={isChecked} onChange={() => handleScore({ id, value })} id={`inp-${id}`} type="checkbox" />
        <label className="cursor-pointer p-1 inline-block w-11/12 text-xs md:text-base" htmlFor={`inp-${id}`}>{ask}</label>
      </li>
    )
  })

  const chunk1 = allQuestions.slice(0, 12);
  const chunk2 = allQuestions.slice(12, 2 * 12);
  const chunk3 = allQuestions.slice(2 * 12);

  const menuQuestions = [chunk1, chunk2, chunk3];

  return (
    <ul className="w-5/6 mb-4 md:mb-10 p-2">
      {menuQuestions[menuPage]}
    </ul>
  );
}

