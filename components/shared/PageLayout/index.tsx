import React from 'react';
import Link from 'next/link';
// import { Burger } from '@components/icons';

type Props = {
  children: React.ReactNode,
}

export default function PageLayout ({ children }: Props) {
  return (
    <div className="page__container">
      <header>
        <nav className="navbar_test">
          <div className="page__navbar-side page__navbar-side--empty"></div>
          <Link href="/dashboard/home">
            <a>
              Brainzy
            </a>
          </Link>
          <div className="page__navbar-side">
            <button></button>
          </div>
        </nav>
      </header>
      {children}
    </div>
  );
}
