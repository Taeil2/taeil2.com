import Head from "next/head";
import styles from "./index.module.scss";

import Footer from "../components/footer";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Taeil's Bank Account Information</title>
        <meta
          name="description"
          content="Taeil's Bank Account Information"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>
          Welcome to <span className={styles.blueText}>tae2.com</span>
        </h1>
        <div className={styles.paymentMethods}>
          <div className={styles.bylineBank}>
            <div className={`${styles.bankLogo} ${styles.bylineBankLogo}`}>
              <Image
                alt="Byline Bank"
                src="/payment/bylinebank-logo.svg"
                width={250}
                height={68}
              />
            </div>
            <h2>Account Number</h2>
            <h3>
              645
              <span className={styles.spacer} />
              079
              <span className={styles.spacer} />
              0874
            </h3>
            <h2>Routing Number</h2>
            <h3>
              7100
              <span className={styles.spacer} />
              1533
              <span className={styles.spacer} />
            </h3>
          </div>
          <div className={styles.chime}>
            <div className={`${styles.bankLogo} ${styles.chimeLogo}`}>
              <Image
                alt="Chime"
                src="/payment/chime-logo.svg"
                width={156.10}
                height={44.45}
              />
            </div>
            <h2>Account Number</h2>
            <h3>
              6891
              <span className={styles.spacer} />
              5536
              <span className={styles.spacer} />
              2031
            </h3>
            <h2>Routing Number</h2>
            <h3>
              103
              <span className={styles.spacer} />
              100
              <span className={styles.spacer} />
              195
            </h3>
          </div>
          <div className={styles.cashApp}>
            <div className={styles.bankLogo}>
              <Image
                alt="Cashapp"
                src="/payment/cashapp-logo.svg"
                width={866.6}
                height={204.7}
                className={styles.cashAppLogo}
              />
            </div>
            <div className={styles.cashAppQR}>
              <Image
                alt="Cash App QR"
                src="/payment/cashapp-qr.png"
                width={288}
                height={288}
              />
            </div>
            <p>$taeilkwak</p>
            <h2>Account Number</h2>
            <h3>
              129
              <span className={styles.spacer} />
              389
              <span className={styles.spacer} />
              102
              <span className={styles.spacer} />
              7716
            </h3>
            <h2>Routing Number</h2>
            <h3>
              041
              <span className={styles.spacer} />
              215
              <span className={styles.spacer} />
              663
            </h3>
          </div>
          <div className={styles.bankOfAmerica}>
            <div className={`${styles.bankLogo} ${styles.bankOfAmericaLogo}`}>
              <Image
                alt="Bank of America"
                src="/payment/bankofamerica-logo.svg"
                width={720}
                height={73}
              />
            </div>
            <h2>Account Number</h2>
            <h3>
              0004
              <span className={styles.spacer} />
              7897
              <span className={styles.spacer} />
              6487
            </h3>
            <h2>Routing Number</h2>
            <h3>
              026
              <span className={styles.spacer} />
              009
              <span className={styles.spacer} />
              593
            </h3>
          </div>
          <div className={styles.venmo}>
            <div className={`${styles.bankLogo} ${styles.venmoLogo}`}>
              <Image
                alt="Venmo"
                src="/payment/venmo-logo.svg"
                width={194.47}
                height={35.72}
              />
            </div>
            <div className={styles.venmoQR}>
              <Image
                alt="Venmo QR"
                src="/payment/venmo-qr.png"
                width={171}
                height={170}
              />
            </div>
            <p>@taeil2</p>
            <h2>Account Number</h2>
            <h3>2221 8586 0055</h3>
            <h2>Routing Number</h2>
            <h3>031 101 279</h3>
          </div>
          <div className={styles.capitalOne}>
            <div className={`${styles.bankLogo} ${styles.capitalOneLogo}`}>
              <Image
                alt="Capital One"
                src="/payment/capitalone-logo.svg"
                width={418}
                height={150}
              />
            </div>
            <h2>Account Number</h2>
            <h3>
              361
              <span className={styles.spacer} />
              8094
              <span className={styles.spacer} />
              0070
            </h3>
            <h2>Routing Number</h2>
            <h3>
              031
              <span className={styles.spacer} />
              176
              <span className={styles.spacer} />
              110
            </h3>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
