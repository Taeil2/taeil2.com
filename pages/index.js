import Head from "next/head";
import styles from "./index.module.scss";

import Footer from "../components/footer";

import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>tae2.com</title>
        <meta
          name="description"
          content="Taeil's Capital One bank account information"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>
          Welcome to <span className={styles.blueText}>tae2.com</span>
        </h1>
          {/* logos
          <Image
              alt="Chime"
              src="/payment/chime-logo.svg"
              width={171}
              height={170}
            /> 
            {/* <Image
              alt="Bank of America"
              src="/payment/bankofamerica-logo.png"
              width={1692}
              height={756}
            />
            <Image
              alt="Cashapp"
              src="/payment/cashapp-logo.svg"
              // width={1200}
              // height={800}
              width={290}
              height={193}
              className={styles.capitalOneLogo}
            />
            <Image
              alt="Venmo"
              src="/payment/venmo-logo.svg"
              width={171}
              height={170}
            />
            <Image
              alt="Capital One"
              src="/payment/capitalone-logo.png"
              width={3840}
              height={2160}
            /> */}
        <div className={styles.paymentMethods}>
          <div className={styles.bylineBank}>
            <div className={styles.bylineBankLogo}>
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
          <div className={styles.venmo}>
            <div className={styles.venmoLogo}>
              <Image
                alt="Chime"
                src="/payment/chime-logo.svg"
                width={171}
                height={170}
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
            <div className={styles.cashAppLogo}>
              <Image
                alt="Cashapp"
                src="/payment/cashapp-logo.svg"
                // width={1200}
                // height={800}
                width={290}
                height={193}
                className={styles.capitalOneLogo}
              />
            </div>
            <div className={styles.cashAppQR}>
              <img alt="Cashapp" src="/payment/cashapp-qr.png" />
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
            <div className={styles.bankOfAmericaLogo}>
              <Image
                alt="Bank of America"
                src="/payment/bankofamerica-logo.png"
                width={1692}
                height={756}
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
          {/* <div className={styles.venmo}>
            <div className={styles.venmoLogo}>
              <Image
                alt="Venmo"
                src="/payment/venmo-logo.svg"
                width={171}
                height={170}
              />
            </div>
            <div className={styles.venmoQR}>
              <Image
                alt="Venmo"
                src="/payment/venmo-qr.png"
                width={171}
                height={170}
              />
              <img alt="Venmo" src="/payment/venmo-qr.png" />
            </div>
            <p>@taeil2</p>
            <h2>Account Number</h2>
            <h3>222 185 860 055</h3>
            <h2>Routing Number</h2>
            <h3>031 101 279</h3>
          </div> */}
          {/* <div>
            <div className={styles.capitalOneLogo}>
              <Image
                alt="Capital One"
                src="/payment/capitalone-logo.png"
                width={3840}
                height={2160}
              />
            </div>
            <h2>Account Number</h2>
            <h3>
              3618
              <span className={styles.spacer} />
              0940
              <span className={styles.spacer} />
              070
            </h3>
            <h2>Routing Number</h2>
            <h3>
              031
              <span className={styles.spacer} />
              176
              <span className={styles.spacer} />
              110
            </h3>
          </div> */}
        </div>
      </main>
      <Footer />
    </div>
  );
}
