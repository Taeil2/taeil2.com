import Link from 'next/link'
import styles from './footer.module.scss'
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function Footer() {
  return <footer className={styles.footer}>
    <Link href="#" onClick={copyToClipboard()}>
      <a className={styles.footerLink}>
        <CopyToClipboard text="taeil2@gmail.com"
          onCopy={() => console.log("copied")}>
            <span>Email</span>
        </CopyToClipboard>
      </a>
    </Link>
    <Link href="https://www.linkedin.com/in/taeil2/">
      <a className={styles.footerLink}>LinkedIn</a>
    </Link>
    <Link href="https://www.facebook.com/taeil2">
      <a className={styles.footerLink}>Facebook</a>
    </Link>
    <Link href="https://taeil2.notion.site/Eddy-728e9e0c7a3c40a2a5b5239652cd716f">
      <a className={styles.footerLink}>Eddy</a>
    </Link>
    <Link href="/maps">
      <a className={styles.footerLink}>Maps</a>
    </Link>
  </footer>
}