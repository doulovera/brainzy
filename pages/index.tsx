import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '@styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Brainzy!</title>
      </Head>
      <div className={styles.main}>
        <h1>Welcome to Brainzy!</h1>

        <p>
          This is a Work In Progress project, so it&apos;s
          not ready yet.
        </p>

        <p>
          We will be releasing it soon, so stay tuned! 🤗
        </p>

        <div className={styles.main__links}>
          <a href="https://github.com/doulovera/brainzy/" target="_blank" rel="noopener noreferrer">
            Github Repo!
          </a>
          
          <a href="https://twitter.com/doulovera" target="_blank" rel="noopener noreferrer">
            @doulovera&apos;s twitter
          </a>
        </div>
      </div>
    </>
  )
}

export default Home
