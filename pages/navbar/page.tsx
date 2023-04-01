'use client'

import Link from "next/link"
import { useState } from "react";


export default function Navbar() {

const [click, setClick] = useState('closed');

const handleClick = () => {
    if (click === 'closed') {
        setClick('open');    
    } else {
        setClick('closed');
    }
    
}

  return (
    <div>
        <div className="md:flex hidden w-full h-14 bg-transparent backdrop-blur-lg justify-end px-4 fixed z-20 text-white items-center">
            
            <div className="flex gap-4 text-xl">
                <Link href='/'><h1>Home</h1></Link>
                <Link href='/portfolio/page' onClick={handleClick}><h1>Portfolio</h1></Link>
                <Link href='/contacts/page'><h1>Chi sono</h1></Link>
            </div>
        </div>

        <div className={click !== 'open' ? "flex md:hidden w-full h-14 bg-transparent justify-between px-4 fixed z-30 text-white items-center" : "flex md:hidden w-screen h-screen fixed bg-stone-900 z-30 text-white justify-between"}>
            <div className={click !== 'open'? "block absolute rounded-full backdrop-blur-3xl bg-transparent w-12 h-12 top-2.5 right-4 border-red-800 border-2" : 'hidden'} onClick={handleClick}/>
            <div className={click !== 'open'? "hidden" : 'absolute top-5 left-6 text-3xl'}>MIRKO LEO</div>
            <div className="space-y-1 absolute top-6 right-6 w-fit" onClick={handleClick} >
                <span className={click === 'open'? "block h-1 w-8 bg-white rounded-lg" : "block h-1 w-8 bg-red-800 rounded-lg"}/>
                <span className={click === 'open' ? 'block h-1 w-8 bg-white rounded-lg -translate-x-3 transition-all duration-300' : 'block h-1 w-8 bg-red-800 rounded-lg transition-all duration-300'}/>
                <span className={click === 'open'? "block h-1 w-8 bg-white rounded-lg" : "block h-1 w-8 bg-red-800 rounded-lg"}/>
            </div>
            <div className={click === 'open' ? 'flex h-screen w-screen text-center justify-center gap-10 text-5xl flex-col opacity-100 transition-all duration-300' : 'opacity-0 hidden'}>
                <Link href='/' onClick={handleClick}><h1>Home</h1></Link>
                
                <Link href='/portfolio/page' onClick={handleClick}><h1>Portfolio</h1></Link>
                
                <Link href='/contacts/page' onClick={handleClick}><h1>Chi sono</h1></Link>
            </div>
        </div>
    </div>
  )
}
