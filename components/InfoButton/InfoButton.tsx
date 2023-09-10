import React from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { ShowInfo } from '../types';

export default function InfoButton({ handleShow }: ShowInfo) {
  return (
    <button name='informação' onClick={() => handleShow(true)} className="hidden md:block text-sm absolute text-center right-10 top-10">
     <InformationCircleIcon width={60} className="mx-auto" />
      Informação
    </button>
  );
}

