import Link from 'next/link'
import styles from './footer.module.scss'

export default function Footer() {
  return <footer className={styles.footer}>
    <Link href="https://taeil2.notion.site/Eddy-728e9e0c7a3c40a2a5b5239652cd716f">
      <a className={styles.footerLink}>Eddy</a>
    </Link>
    <Link href="/maps">
      <a className={styles.footerLink}>Maps</a>
    </Link>
  </footer>
  
}