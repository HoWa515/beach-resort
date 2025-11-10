import Link from "next/link";

export default function Nav() {
  return (
    <ul>
      <li>
        <Link href="/hotels">Hotels</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/account">Account</Link>
      </li>
    </ul>
  );
}
