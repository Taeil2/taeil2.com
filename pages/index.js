import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import styles from './index.module.scss'

import Link from 'next/link'
import Image from 'next/image'

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
          Welcome to <span className={styles.blueText}>taeil2.com</span>
        </h1>
        <div className={styles.paymentMethods}>
          <div>
            <div className={styles.capitalOneLogo}>
              <Image
                alt="Capital One"
                src="/payment/capitalone-logo.png"
                width={3840}
                height={2160}
                // className={styles.capitalOneLogo}
              />
            </div>
            <h2>Account Number</h2>
            <h3>36180940070</h3>
            <h2>Routing Number</h2>
            <h3>031176110</h3>
          </div>
          <div>
            <div className={styles.venmoLogo}>
              <Image
                alt="Venmo"
                src="/payment/venmo-logo.svg"
                width={171}
                height={170}
              />
            </div>
            <div className={styles.venmoQR}>
              {/* <Image
                alt="Venmo"
                src="/payment/venmo-qr.png"
                width={171}
                height={170}
              /> */}
              <img
                alt="Venmo"
                src="/payment/venmo-qr.png"
              />
            </div>
            <p>@taeil2</p>
          </div>
          <div style={{marginTop: -35}}>
            <Image
              alt="Cashapp"
              src="/payment/cashapp-logo.svg"
              width={1200}
              height={800}
              className={styles.capitalOneLogo}
            />
            <div className={styles.cashAppQR}>
              {/* <Image
                alt="Cashapp"
                src="/payment/cashapp-qr.png"
                width={288}
                height={288}
              /> */}
              <img
                alt="Cashapp"
                src="/payment/cashapp-qr.png"
              />
            </div>
            <p>$taeilkwak</p>
          </div>
        </div>
        <Link href="/maps">
          <a className={styles.maps}>Maps</a>
        </Link>
      </main>
    </div>
  )
}
