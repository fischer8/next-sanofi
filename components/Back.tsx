import React from 'react';
import Link from 'next/link';
import { ArrowLongLeftIcon } from '@heroicons/react/24/outline';

export default function Back() {
  return (
    <Link href="/menu" className="absolute z-20 p-4 md:hidden top-0 left-0">
      <ArrowLongLeftIcon className="mx-auto" width={24} />
    </Link>
  );
}

