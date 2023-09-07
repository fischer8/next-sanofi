import React from 'react';
import questions from './questions';
import { Prop } from '../types';

export default function CapriniUl({ handleScore, score, menuPage }: Prop) {
  const allQuestions = questions[menuPage].map(({ id, ask, value }) => {
    const isChecked = score.some((s) => s.id === id);
    return (
      <li className="mb-2 md:hover:bg-purple-100 border flex flex-row justify-between" key={id}>
        <input className="appearance-none border w-1/12 cursor-pointer me-px md:me-2 checked:bg-purple-500" checked={isChecked} onChange={() => handleScore({ id, value })} id={`inp-${id}`} type="checkbox" />
        <label className="cursor-pointer text-gray-600 p-1 inline-block w-11/12 text-xs md:text-base" htmlFor={`inp-${id}`}>{ask}</label>
      </li>
    )
  })

  return (
    <ul className="w-5/6 mb-2 md:mb-2 p-2">
      {allQuestions}
    </ul>
  );
}

