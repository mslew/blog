import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import ThemeSwitch from './ThemeSwitch'

const NavBar = () => {
  return (
    <nav className='flex flex-row space-x-28 border-b border-purple-600'>
        <Logo className={''}/>
        <Link href="/">Intro</Link>
        <Link href="/">About</Link>
        <Link href="/">Projects</Link>
        <Link href="/">Contact</Link>
        <Link href="/blog">Blog</Link>
        <button>Resume</button>
        <ThemeSwitch/>
    </nav>
  )
}

export default NavBar