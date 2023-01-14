import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div>
        <Link href='/blog'>
          <h2>Dev Blog</h2>
        </Link>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Blogs</li>
        </ul>
      </div>
    </header>
  );
}
