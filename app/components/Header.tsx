

import Link from "next/link";

export default function Header() {
  return (
    <div data-theme="black" className="navbar  transition-all duration-300 bg-background/95 backdrop-blur-sm border-b border-borde shadow-sm sticky top-0 left-0 w-full z-50   border-white/10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" title="Open navigation menu" aria-label="Open navigation menu" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-30 p-2 shadow rounded-xl border border-white/10">
            <li><a href="#body">About</a></li>
            <li>
              <a>Content</a>
              <ul className="p-2 ">
                <li><Link href="/projects" className="rounded-xl">Projects</Link></li>
                <li><Link href="/demos" className="rounded-xl">Demos</Link></li>
              </ul>
            </li>
            <li><a href="#contact" className="rounded-xl">Contact</a></li>
          </ul>
        </div>
        <a href="#profile" className="btn btn-ghost text-base font-bold cursor-none rounded-xl">Thandululo Nengovhela</a>  
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href="#body" className="cursor-none rounded-xl">About</a></li>
          <li>
            <details>
              <summary className="cursor-none rounded-xl">Content</summary>
              <ul className="p-2 bg-black rounded-xl border border-white/10 w-40 z-1">
                <li><Link href="/projects" className="cursor-none rounded-xl">Projects</Link></li>
                <li><Link href="/demos" className="cursor-none rounded-xl">Demos</Link></li>
              </ul>
            </details>
          </li>
          <li><a href="#contact" className="cursor-none rounded-xl">Contact</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-sm rounded-xl cursor-none">Let&apos;s Talk</a>
      </div>
    </div>
    
  )
}