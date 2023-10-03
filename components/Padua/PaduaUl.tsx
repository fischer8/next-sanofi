import React from 'react';
import questions from './questions';
import { PaduaProp } from '../types';

export default function PaduaUl({ handleScore, score }: PaduaProp) {
  const allQuestions = questions.map(({ id, ask, value }) => {
    const isChecked = score.some((s) => s.id === id);
    return (
      <li className="mb-1 md:mb-0 md:hover:border-gray-400 md:hover:bg-purple-200 rounded border flex flex-row justify-between" key={id}>
        <input onChange={() => handleScore({ id, value })} className="appearance-none hover:border-gray-400 rounded-l border-gray-300 border-e w-1/12 cursor-pointer me-px md:me-2 checked:bg-purple-500" checked={isChecked} id={`inp-${id}`} type="checkbox" />
        <label className="p-1 cursor-pointer select-none rounded text-gray-600 inline-block w-11/12 text-sm " htmlFor={`inp-${id}`}>{ask}</label>
      </li>
    )
  })

  return (
    <ul className="w-full mb-2">
      {allQuestions}
    </ul>
  );
}

