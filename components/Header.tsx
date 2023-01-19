import Link from "next/link";

import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.flexcontainer}>
      <div className={styles.menucontainer}>
        <ul>
          <li>
            <Link href='/'> Home</Link>
          </li>
          <li>
            <Link href='/about'>Resources </Link>
          </li>
          <li>
            <Link href='/about'>Products </Link>
          </li>
          <li>
            <Link href='/blog'>Blog </Link>
          </li>
        </ul>
      </div>
      <div className={styles.signincontainer}>
        <p>Log in</p>
        <button className='button-primary'>Sign up</button>
      </div>
    </header>
  );
}
