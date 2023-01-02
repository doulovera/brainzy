import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  children: React.ReactNode,
  href: string,
}

export default function Item ({ children, href }: Props) {
  const router = useRouter();

  return (
    <Link href={href}>
      <a>
        <div className={router.pathname.startsWith(href) ? 'active' : ''}>
          {children}
        </div>
      </a>
    </Link>
  );
}
