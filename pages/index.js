import Head from "next/head";
import styles from "./index.module.scss";
// import styles from "./no-images.module.scss";

import Link from "next/link";

import Footer from "../components/footer";

import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Image from "next/image";

export default function Home() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  return (
    <div>
      <Head>
        <title>Send money for Justice / The Resolution / The Solution</title>
        <meta
          name="description"
          content="Send money for Justice / The Resolution / The Solution"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>To send the money</h1>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.section}>
              <h2>Send a new account with money in it</h2>
              <ul>
                <li>
                  Create a new account at any bank or in any app that holds
                  money.
                  <br />
                  Some examples include:
                </li>
                <li>
                  <ul>
                    <li>
                      <Link href="https://www.chase.com/">Chase Bank</Link>
                    </li>
                    <li>
                      <Link href="https://www.hsbc.com/">HSBC Holdings</Link>
                    </li>
                    <li>
                      <Link href="https://www.abchina.com/">
                        Agricultural Bank of China
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.rbc.com/">
                        Royal Bank of Canada
                      </Link>
                    </li>
                    <li>
                      <Link href="https://mabanque.bnpparibas/">
                        BNP Paribas
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.dbs.com/">DBS Bank</Link>
                    </li>
                    <li>
                      <Link href="https://venmo.com/">Venmo</Link>
                    </li>
                    <li>
                      <Link href="https://cash.app/">Cash App</Link>
                    </li>
                  </ul>
                </li>
                <li>Transfer your money into this account</li>
                <li>
                  Email Taeil at{" "}
                  <a className={styles.link}>
                    <CopyToClipboard
                      text="taeil2@gmail.com"
                      onCopy={() => {
                        setShowTooltip(true);
                        setTimeout(() => {
                          setFadeOut(true);
                        }, 4000);
                        setTimeout(() => {
                          setShowTooltip(false);
                          setFadeOut(false);
                        }, 5000);
                      }}
                    >
                      <span>taeil2@gmail.com</span>
                    </CopyToClipboard>{" "}
                    <span
                      className={`${styles.tooltip} ${
                        showTooltip && styles.showTooltip
                      } ${fadeOut && styles.fadeOut}`}
                    >
                      {/* <span> */}
                      copied taeil2@gmail.com to clipboard
                      {/* </span> */}
                    </span>
                  </a>
                  with the following:
                  <ul>
                    <li>The bank or app name</li>
                    <li>The bank or app website</li>
                    <li>Your login</li>
                    <li>Your password</li>
                    <li>
                      Any other required information to access this account
                    </li>
                  </ul>
                </li>
              </ul>
              <p className={styles.faint}>
                Note: This account is not yours after sending this information.
              </p>
            </div>
            <div className={styles.section}>
              <h2>Send a wire transfer</h2>
              <div className={styles.buseyBank}>
                <div
                  // className={`${styles.bankLogo} ${styles.buseyBankLogo}`}
                  className={styles.bankLogo}
                >
                  <Image
                    alt="Busey Bank"
                    src="/payment/buseybank-logo.svg"
                    width={169}
                    height={57}
                    className={styles.buseyBankLogo}
                  />
                </div>
                <h3>Account Number</h3>
                <h4>
                  2305
                  <span className={styles.spacer} />
                  8777
                  <span className={styles.spacer} />
                  7034
                </h4>
                <h3>Routing Number</h3>
                <h4>
                  071
                  <span className={styles.spacer} />
                  102
                  <span className={styles.spacer} />
                  568
                </h4>
              </div>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.section}>
              <h2>Send through Venmo or Cash App</h2>
              <div className={styles.venmo}>
                <div className={styles.bankLogo}>
                  <Image
                    alt="Venmo"
                    src="/payment/venmo-logo.svg"
                    width={194.47}
                    height={35.72}
                    className={styles.venmoLogo}
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
                <p>
                  <Link href="https://account.venmo.com/u/taeil2">@taeil2</Link>
                </p>
                {/* <h3>Account Number</h3>
              <h4>2221<span className={styles.spacer} />8586<span className={styles.spacer} />0055</h4>
              <h3>Routing Number</h3>
              <h4>031<span className={styles.spacer} />101<span className={styles.spacer} />279</h4> */}
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
                <p>
                  <Link href="https://cash.app/$taeilkwak">$taeilkwak</Link>
                </p>
                {/* <h3>Account Number</h3>
              <h4>
                129
                <span className={styles.spacer} />
                389
                <span className={styles.spacer} />
                102
                <span className={styles.spacer} />
                7716
              </h4>
              <h3>Routing Number</h3>
              <h4>
                041
                <span className={styles.spacer} />
                215
                <span className={styles.spacer} />
                663
              </h4> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className={styles.chime}>
            <div className={styles.bankLogo}>
              <Image
                alt="Chime"
                src="/payment/chime-logo.svg"
                width={156.10}
                height={44.45}
                className={styles.chimeLogo}
              />
            </div>
            <h3>Account Number</h3>
            <h4>
              6891
              <span className={styles.spacer} />
              5536
              <span className={styles.spacer} />
              2031
            </h4>
            <h3>Routing Number</h3>
            <h4>
              103
              <span className={styles.spacer} />
              100
              <span className={styles.spacer} />
              195
            </h4>
          </div> */}
        {/* <div className={styles.capitalOne}>
            <div className={styles.bankLogo}>
              <Image
                alt="Capital One"
                src="/payment/capitalone-logo.svg"
                width={418}
                height={150}
                className={styles.capitalOneLogo}
              />
            </div>
            <h3>Account Number</h3>
            <h4>
              361
              <span className={styles.spacer} />
              8094
              <span className={styles.spacer} />
              0070
            </h4>
            <h2>Routing Number</h2>
            <h4>
              031
              <span className={styles.spacer} />
              176
              <span className={styles.spacer} />
              110
            </h4>
          </div> */}
      </main>
    </div>
  );
}
