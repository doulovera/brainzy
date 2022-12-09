import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type CardProps = {
  className?: string;
  href: string;
  title: string;
  cover?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export default function Card ({ className = '', href, title, cover, icon, children }: CardProps) {
  return (
    <Link href={href}>
      <a className={`group flex flex-col w-full h-full rounded-lg bg-zinc-800 border-zinc-700 border-2 border-solid overflow-hidden ${className}`}>
        <div className="relative brightness-50 grayscale group-hover:brightness-75 group-hover:grayscale-0 w-full h-20">
          {
            cover
              ? (
                <Image
                  src={cover || '/web3.jpg'}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt="Movie or Show Poster"
                  className=""
                />
                )
              : <div className="bg-gray-800 h-full w-full" />
          }
        </div>
        <div className="relative p-3 pt-6">
          {icon}
          <h5 className="text-lg font-bold">{title}</h5>
          <div className="h-full">
            {children}
          </div>
        </div>
      </a>
    </Link>
  );
}
