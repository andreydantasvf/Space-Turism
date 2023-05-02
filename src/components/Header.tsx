"use client"

import Image from "next/image";
import { Barlow_Condensed } from "next/font/google"
import { useState } from "react";

const barlowCondensed = Barlow_Condensed({
  weight: '400',
  subsets: ['latin']
})

const links = [
  { name: 'HOME' },
  { name: 'DESTINATION' },
  { name: 'CREW' },
  { name: 'TECHNOLOGY' }
]

export function Header() {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!open);
  }

  return (
    <nav className="flex items-center justify-between pt-5 pl-7">
      <Image src="/logo.svg" alt="Logo" width={40} height={40} />

      <Image src={open ? '/icon-close.svg' : '/icon-hamburger.svg'} alt="Button hamburger" width={40} height={40} className="z-20 fixed right-5 top-6 cursor-pointer md:hidden" onClick={handleOpen} />

      <ul className={`bg-[#ffffff14] backdrop-blur-lg md:pl-10 pr-28 z-10 md:static fixed top-0 md:h-auto h-screen duration-500 ease-linear ${barlowCondensed.className} ${!open ? 'right-[-100%]' : 'right-0'}`}>
        {links.map((link, index) => (
          <li className="md:inline-block md:ml-10 ml-5 border-b-2 border-transparent hover:border-white duration-300 md:my-0 my-6" key={index}>
            <a href="" className="text-white md:py-5 py-3 inline-block text-xl font-normal">{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}