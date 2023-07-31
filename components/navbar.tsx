'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import headshot from '../public/images/headshot.jpeg'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

const navPages = [
  {
    title: 'Home',
    url: '/'
  },
  {
    title: 'About',
    url: '/about'
  },
  {
    title: 'Tags',
    url: '/tags'
  }
]

const NavBar = ({ mobileNavShown, onNavChange }: { mobileNavShown: boolean, onNavChange?: (url: string) => void }) => {
  const [colorMode, setColorMode] = useState<'light' | 'dark'>('dark')
  const pathname = usePathname()

  const toggleColor = () => {
    const html = document.getElementsByTagName('html')[0]

    if (colorMode === 'dark') {
      setColorMode('light')
      html?.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      setColorMode('dark')
      html?.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  useEffect(() => {
    const localColorMode = localStorage.getItem('theme')
    const html = document.getElementsByTagName('html')[0]

    if (!!localColorMode) {
      if (localColorMode === 'light') {
        setColorMode('light')
        html?.classList.remove('dark')
      } else {
        setColorMode('dark')
        html?.classList.add('dark')
      }
    }
  }, [])

  return (
    <nav className={`transition-all duration-300 fixed inset-0 w-[--sidebar] 2xl:w-[--sidebar-xl] pb-10 pt-10 2xl:pt-12 px-7 2xl:px-9 overflow-y-auto bg-bg border-r border-bg2 shadow-lg ${mobileNavShown ? 'translate-x-0' : '-translate-x-[--sidebar]'}  md:translate-x-0`}>
      <div className='pr-1'>
        <div className='group rounded-full w-[7rem] h-[7rem] overflow-hidden border-2 border-fg shadow-lg'>
          <Link href={'/'}>
            <Image src={headshot} alt='headshot' className='transition-all duration-300 group-hover:scale-110' />
          </Link>
        </div>
        <div className='transition-all my-4 origin-top-left'>
          <Link href='/' className='transition-all duration-300 font-bold text-fg4 hover:text-fg text-3xl'>Kevin Maxey</Link>
        </div>
        <div className='text-fg4 text-sm my-4'>
          🧑‍💻
          <span className='italic'> / Full Stack Software Enginner / Blogger / Home Lab Nerd</span>
        </div>
        <button onClick={toggleColor}>
          <div className="relative w-[50px] h-[26px] rounded-full bg-fg overflow-hidden">
            <div className='absolute h-full w-full px-1 flex justify-between items-center '>
              <FontAwesomeIcon icon={faMoon} color='#4a4a42' size='lg' />
              <FontAwesomeIcon icon={faSun} color='#f39c12' size='1x' />
            </div>
            <div className={`transition-all duration-300 absolute w-[24px] h-[24px] top-[1px] rounded-full bg-bg2 border-2 border-bg0_h ${colorMode === 'light' ? 'left-[1px]' : 'left-[calc(100%-1px)] translate-x-[-100%]'}`} />
          </div>
        </button>
      </div>
      <div className='mt-10'>
        <ul className='divide-y-[1rem] divide-transparent'>
          {navPages.map(navPage => {
            return (
              <li key={navPage.title}>
                <Link href={navPage.url} className='text-fg' onClick={() => !!onNavChange ? onNavChange(navPage.url) : {}}>
                  <div className={`outline outline-fg px-2 py-1 ${pathname === navPage.url ? 'bg-bg2 outline-2 opacity-100' : 'opacity-80 outline-1 hover:bg-bg2 active:outline-2 active:opacity-100'}`}>
                    {navPage.title}
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar