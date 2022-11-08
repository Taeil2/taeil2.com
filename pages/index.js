import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>taeil2.com</title>
        <meta name="description" content="Taeil's Capital One bank account information" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>
          Welcome to <span className={styles.blueText}>taeil2.com!</span>
        </h1>
        <h2>Account Number</h2>
        <h3>36180940070</h3>
        <h2>Routing Number</h2>
        <h3>031176110</h3>
        <Link href="/maps"><a>Maps</a></Link>
      </main>
    </div>
  )
}
