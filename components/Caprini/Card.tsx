import React from 'react';
import questions from './questions';
import { Prop } from '../types';

export default function Card({ handleScore, score, menuPage }: Prop) {
  const allQuestions = questions.map(({ id, ask, value }) => {
    const isChecked = score.some((s) => s.id === id);
    return (
      <li className="mb-2" key={id}>
        <input checked={isChecked} onClick={() => handleScore({ id, value })} className="cursor-pointer me-2" type="checkbox" id={id} />
        <label className="cursor-pointer" htmlFor={id}>{ask}</label>
      </li>
    )
  })

  const chunk1 = allQuestions.slice(0, 12);
  const chunk2 = allQuestions.slice(12, 2 * 12);
  const chunk3 = allQuestions.slice(2 * 12);

  const menuQuestions = [chunk1, chunk2, chunk3];

  return (
    <ul className="w-5/6 border">
      {menuQuestions[menuPage]}
    </ul>
  );
}

