import React from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { ShowInfo } from '../types';

export default function InfoButton({ handleShow }: ShowInfo) {
  return (
    <button name='informação' onClick={() => handleShow(true)} className="hidden md:block">
      <InformationCircleIcon width={44} className="mx-auto text-gray-800" />
    </button>
  );
}

