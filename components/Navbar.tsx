'use client'

import React, { useState } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import Image from 'next/image'
import { ModeToggle } from './mode-toggle'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navLinks = [
    {
      href: 'https://www.scorebat.com/england-premier-league-live-scores-1/',
      label: 'PREMIER LEAGUE',
    },
    {
      href: 'https://www.scorebat.com/spain-la-liga-live-scores/',
      label: 'LA LIGA',
    },
    {
      href: 'https://www.scorebat.com/italy-serie-a-live-scores/',
      label: 'SERIE A',
    },
  ]
  const { theme, setTheme } = useTheme()

  return (
    <>
      <header className='  max-w-[1440px] mx-auto z-10 w-full'>
        <nav className='h-20 flex justify-between items-center max-container  px-12 max-sm:px-2 py-2 border-b-2 border-primary'>
          <div>
            <Link
              href='/'
              className='text-3xl font-bold flex justify-center items-center'
            >
              <Image
                src={'/images/football.svg'}
                alt='icon'
                width={40}
                height={40}
                className='bg-white rounded-sm mr-2'
              />
              Football Info
            </Link>
          </div>

          <ul className=' flex justify-center items-center gap-16 max-lg:hidden mr-16 max-lg:mr-0'>
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className='font-montserrat leading-normal text-lg text-slate-gray'
                  target='_blank'
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <ModeToggle />
          </ul>

          <div
            className='hidden max-lg:block cursor-pointer'
            onClick={() => {
              setIsMenuOpen(!isMenuOpen)
            }}
          >
            {isMenuOpen ? (
              <Image
                src={
                  theme === 'dark'
                    ? '/images/close-white.svg'
                    : '/images/close.svg'
                }
                alt='icon'
                width={24}
                height={24}
              />
            ) : (
              <Image
                src={
                  theme === 'dark'
                    ? '/images/menu-white.svg'
                    : '/images/menu.svg'
                }
                alt='icon'
                width={25}
                height={24}
              />
            )}
          </div>
        </nav>
      </header>
      {isMenuOpen && (
        <div className='flex justify-end border-2 '>
          <ul className='absolute w-1/3 lg:hidden flex flex-col items-start justify-start  p-4 gap-6 border-2  bg-primary z-10'>
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className='font-montserrat leading-normal text-lg text-primary-foreground   '
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <Link
              href='/cart'
              className='flex'
            ></Link>
            <ModeToggle />
          </ul>
        </div>
      )}
    </>
  )
}
export default Navbar
