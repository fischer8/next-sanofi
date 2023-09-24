import React from 'react';
import questions from './questions';
import { CapriniProp } from '../types';

export default function CapriniUl({ handleScore, score, menuPage }: CapriniProp) {
  const allQuestions = questions[menuPage].map(({ id, ask, value }) => {
    const isChecked = score.some((s) => s.id === id);
    return (
      <li className="mb-1 md:mb-2 md:hover:bg-purple-100 rounded border flex flex-row justify-between" key={id}>
        <input onChange={() => handleScore({ id, value })} className="appearance-none rounded-l border w-1/12 cursor-pointer me-px md:me-2 checked:bg-purple-500" checked={isChecked} id={`inp-${id}`} type="checkbox" />
        <label className="cursor-pointer select-none rounded text-gray-600 p-1 inline-block w-11/12 text-sm " htmlFor={`inp-${id}`}>{ask}</label>
      </li>
    )
  })

  return (
    <ul className="w-full mb-2">
      {allQuestions}
    </ul>
  );
}

