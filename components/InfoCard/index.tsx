import React from 'react';
import styles from './InfoCard.module.css';
import { useRouter } from 'next/router';
import { ArrowRight } from '@components/icons';

type Props = {
  href: string;
  icon: React.ReactElement;
  title: string;
  amount: string | number;
}

export default function InfoCard ({ href, icon, title, amount }: Props) {
  const router = useRouter();

  const handleClick = () => router.push(href);

  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.icon_container}>
        {icon}
      </div>
      <div className={styles.content}>
        <p>{title}</p>
        <h3>{amount}</h3>
      </div>
      <div className={styles.arrow}>
        <ArrowRight />
      </div>
    </div>
  );
}
