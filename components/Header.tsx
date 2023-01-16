import Link from "next/link";

import "../styles/Header.module.css";

export default function Header() {
  return (
    <header className='header'>
      <div className='menucontainer'>
        <Link href='/blog'>
          <h2>Dev Blog</h2>
        </Link>

        <ul>
          <Link href='/'>
            <li>Home</li>
          </Link>
          <Link href='/about'>
            <li>About</li>
          </Link>

          <li>Blogs</li>
        </ul>
      </div>
    </header>
  );
}
