'use client'
import { usePathname } from 'next/navigation'

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

import Image from 'next/image'
import headshot from '../public/images/headshot.jpeg'
import Link from 'next/link'

const NavBar = ({ mobileNavShown, onNavChange }: { mobileNavShown: boolean, onNavChange?: (url: string) => void }) => {
  const pathname = usePathname()

  return (
    <nav className={`transition-all duration-300 fixed inset-0 w-[--sidebar] 2xl:w-[--sidebar-xl] pb-10 pt-10 2xl:pt-12 px-7 2xl:px-9 overflow-y-auto bg-bg border-r border-bg2 shadow-lg ${mobileNavShown ? 'translate-x-0' : '-translate-x-[--sidebar]'}  md:translate-x-0`}>
      <div className='pl-2 pr-1'>
        <div className='transition-all rounded-full w-[7rem] h-[7rem] overflow-hidden border-2 border-fg shadow-lg'>
          <Image src={headshot} alt='headshot' />
        </div>
        <div className='transition-all mt-4 origin-top-left hover:scale-[103%]'>
          <Link href='/' className='transition-all font-lg text-fg1 hover:text-fg3 text-2xl'>Kevin Maxey</Link>
        </div>
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