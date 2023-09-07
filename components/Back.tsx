import React from 'react';
import Link from 'next/link';
import { ArrowLongLeftIcon } from '@heroicons/react/24/outline';

export default function Back() {
  return (
    <Link href="/menu" className="absolute z-50 p-4 md:p-6 lg:p-20 rounded-e rounded-b-lg top-0 left-0">
      <ArrowLongLeftIcon className="mx-auto" width={24} />
      <p className="hidden md:block text-xs">Voltar</p>
    </Link>
  );
}
