import React from 'react';
import Link from 'next/link';

type Props = {
  children: React.ReactNode,
  href: string,
}

export default function Item ({ children, href }: Props) {
  return (
    <Link href={href}>
      <a>
        <div>
          {children}
        </div>
      </a>
    </Link>
  );
}
