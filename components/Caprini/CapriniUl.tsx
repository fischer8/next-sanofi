import React from 'react';
import questions from './questions';
import { Prop } from '../types';

export default function CapriniUl({ handleScore, score, menuPage }: Prop) {
  const allQuestions = questions[menuPage].map(({ id, ask, value }) => {
    const isChecked = score.some((s) => s.id === id);
    return (
      <li className="mb-2 md:hover:bg-purple-100 rounded border flex flex-row justify-between" key={id}>
        <input onChange={() => handleScore({ id, value })} className="appearance-none rounded-l border w-1/12 cursor-pointer me-px md:me-2 checked:bg-purple-500" checked={isChecked} id={`inp-${id}`} type="checkbox" />
        <label className="cursor-pointer rounded text-gray-600 p-1 inline-block w-11/12 text-xs md:text-base" htmlFor={`inp-${id}`}>{ask}</label>
      </li>
    )
  })

  return (
    <ul className="w-5/6 mb-2 md:mb-2 p-2">
      {allQuestions}
    </ul>
  );
}

