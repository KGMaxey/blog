'use client'

import NavBar from '@/components/navbar'
import "@code-hike/mdx/dist/index.css"
import './globals.css'
import { Noto_Sans_Mono } from 'next/font/google'
import TopBar from '@/components/topbar'
import SideBar from '@/components/sidebar'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
config.autoAddCss = false

const noto = Noto_Sans_Mono({ subsets: ['latin'] })

export default function RootLayout({
  children
}: {
  children: React.ReactNode,
}) {
  const [mobileNavShown, setMobileNavShown] = useState(false)
  const [scrollButtonShown, setScrollButtonShown] = useState(false)

  useEffect(() => {
    const listener = () => {
      const scrolled = document.documentElement.scrollTop
      setScrollButtonShown(scrolled > 200)
    }

    window.addEventListener('scroll', listener)

    return () => window.removeEventListener('scroll', listener)
  })

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <html lang="en" className={`dark tracking-tighter scroll-smooth overflow-x-clip ${noto.className}`}>
      <body className='bg-bg0_s overflow-x-clip'>
        <NavBar mobileNavShown={mobileNavShown} onNavChange={() => {
          if (mobileNavShown) setMobileNavShown(false)
        }} />
        <div className={`transition-all duration-300 md:ml-[--sidebar] xl:ml-[--sidebar-xl] ${mobileNavShown ? 'translate-x-[--sidebar]' : 'translate-x-0'}`}>
          <div className={`absolute w-screen h-screen z-40 md:hidden bg-transparent ${!mobileNavShown ? 'hidden' : ''}`} onClick={() => {
            if (mobileNavShown) setMobileNavShown(false)
          }} />
          <div className='mx-auto md:max-w-[85%] px-6 text-fg'>
            <TopBar handleMobileClick={() => setMobileNavShown(!mobileNavShown)} />
            {children}
            <footer className='text-xs text-fg4 mt-10 py-8 md:mr-[--sidebar] xl:mr-[--sidebar-xl] border-t border-fg4'>
              <div className='flex flex-wrap justify-center items-center'>
                <p className='text-center opacity-80'>
                  {'See something wrong? Want to contribute? '}
                  <a href='https://github.com/kgmaxey' className='text-fg hover:text-blue1 hover:underline'>Edit this page</a>
                </p>
                <p className='text-center opacity-80 before:md:content-["-"] before:md:mx-2'>
                  <a href='' className='text-fg hover:text-blue1 hover:underline'>© {new Date().getFullYear()}</a>
                  {' '}
                  <a href='' className='text-fg hover:text-blue1 hover:underline'>KGMaxey</a>
                  {' '}
                  Some rights reserved.
                </p>
              </div>
            </footer>
          </div>
        </div>
        <button onClick={scrollTop} className={`${scrollButtonShown ? 'opacity-100' : 'opacity-0'} transition-all duration-300 fixed w-12 h-12 bottom-8 hover:bottom-9 right-8 2xl:right-[calc((100vw-var(--sidebar-xl)-1280px)/2+2rem)] bg-bg border border-bg4 rounded-full shadow-lg`}>
          <FontAwesomeIcon icon={faAngleUp} size='lg' className='text-fg' />
        </button>
      </body>
    </html>
  )
}
