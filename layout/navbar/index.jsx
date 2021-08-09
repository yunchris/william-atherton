import Link from "next/link";

export default function NavBar() {
  return (
    <div className="navbar">
      <Link href="/">
        <div className="pageButtons">HOME</div>
      </Link>
      <Link href="/bio">
        <div className="pageButtons">BIO</div>
      </Link>
      <Link href="/news">
        <div className="pageButtons">NEWS</div>
      </Link>
    </div>
  );
}
