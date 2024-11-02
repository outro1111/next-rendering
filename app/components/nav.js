import Link from "next/link";

export default function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/ssg">SSG</Link></li>
        <li><Link href="/ssr">SSR</Link></li>
        <li><Link href="/isr">ISR</Link></li>
      </ul>
    </nav>
  );
}