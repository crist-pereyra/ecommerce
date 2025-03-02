'use client';

import Link from 'next/link';
import { Button } from '../ui/button';

interface Props {
  href: string;
  label: string;
}
export const BackButton = ({ href, label }: Props) => {
  return (
    <Button className='font-medium w-full' asChild variant='link'>
      <Link href={href} aria-label={label}>
        {label}
      </Link>
    </Button>
  );
};
