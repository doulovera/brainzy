import type { NextPage } from 'next';
import Head from 'next/head';
import { Book } from '@icons/index'

import InfoCard from '@components/InfoCard';

const components = () => {
  return (
    <>
      <Head>
        <title>Brainzy - Components</title>
      </Head>
      <div style={{ margin: '1rem' }}>
        <InfoCard href="/priv/components" icon={<Book />} title="Saved books" amount="20" />
      </div>
    </>
  )
}

export default components
