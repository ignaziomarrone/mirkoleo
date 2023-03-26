'use client'

import React from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

export default function Backtotop() {

    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"})
    }

  return (
    <div>
        <button title='Scroll to Top' className="fixed bottom-4 right-4 z-20 text-red-800 text-5xl" onClick={scrollTop}> <BsFillArrowUpCircleFill/></button>
    </div>
  )
}
