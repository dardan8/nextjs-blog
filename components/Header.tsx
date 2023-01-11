import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div>
        <Link href='/blog'>
          <h2>Dev Blog</h2>
        </Link>
      </div>
    </header>
  );
}
