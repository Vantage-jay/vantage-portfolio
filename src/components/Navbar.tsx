import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        VANTAGE
      </div>
      <div className="links">
        <Link href="/">Home</Link>
        <Link href="/web3">Web3</Link>
        <Link href="/developer">Developer</Link>
        <Link href="/art">Art</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}
