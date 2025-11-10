// BeforeAfter.tsx
'use client';  // أضف ده في الأول
import { useState } from 'react';
import Image from 'next/image';

interface BeforeAfterProps {
  before: string;
  after: string;
}

export default function BeforeAfter({ before, after }: BeforeAfterProps) {
  const [isAfter, setIsAfter] = useState(false);

  return (
    <div className="relative w-full h-64 overflow-hidden rounded">
      <Image
        src={isAfter ? after : before}
        alt={isAfter ? 'After' : 'Before'}
        fill
        className="object-cover"
        loading="lazy"
      />
      <button
        onClick={() => setIsAfter(!isAfter)}
        className="absolute bottom-4 right-4 bg-primary text-white px-4 py-2 rounded"
      >
        {isAfter ? 'قبل' : 'بعد'}
      </button>
    </div>
  );
}