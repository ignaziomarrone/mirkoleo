'use client'
import { BsFillArrowUpCircleFill, BsInstagram} from 'react-icons/bs'
import Link from 'next/link'
import {TbHandClick} from 'react-icons/tb'

export default function About() {

const url = 'https://instagram.com/mirkoleo_fotografo?igshid=YmMyMTA2M2Y='




    return (
    <div className='overflow-scroll'>

      <div className="w-screen h-screen bg-stone-900 hidden md:grid grid-cols-3 grid-rows-3 gap-2 pt-1 p-2">
        <div className=" hover:scale-105 transition duration-300 hover:shadow-2xl rounded-md bg-[url('./img/battesimo1.webp')] bg-cover opacity-70 hover:opacity-100 hover:z-10 bg-center"><a aria-label='Foto' className="block w-full h-full" href="https://res.cloudinary.com/dmhsygnlc/image/upload/v1679479203/mirkoleo/battesimo1.jpg"/></div>
        <div className=" hover:scale-105 transition duration-300 hover:shadow-2xl rounded-md bg-[url('./img/battesimo2.webp')] bg-cover opacity-70 hover:opacity-100 hover:z-10 bg-center"><a aria-label='Foto' className="block w-full h-full" href="https://res.cloudinary.com/dmhsygnlc/image/upload/v1679479213/mirkoleo/battesimo2.jpg"/></div>
        <div className=" hover:scale-105 transition duration-300 hover:shadow-2xl rounded-md bg-[url('./img/viola1.webp')] bg-cover opacity-70 hover:opacity-100 hover:z-10 bg-center"><a aria-label='Foto' className="block w-full h-full" href="https://res.cloudinary.com/dmhsygnlc/image/upload/v1679479218/mirkoleo/viola1.jpg"/></div>       
        <div className=" hover:scale-105 transition duration-300 hover:shadow-2xl rounded-md bg-[url('./img/viola2.webp')] bg-cover opacity-70 hover:opacity-100 hover:z-10 bg-center"><a aria-label='Foto' className="block w-full h-full" href="https://res.cloudinary.com/dmhsygnlc/image/upload/v1679479501/mirkoleo/viola2.jpg"/></div>
        <div className=" hover:scale-105 transition duration-300 hover:shadow-2xl rounded-md bg-[url('./img/manuela.webp')] bg-cover opacity-70 hover:opacity-100 hover:z-10 bg-center"><a aria-label='Foto' className="block w-full h-full" href="https://res.cloudinary.com/dmhsygnlc/image/upload/v1679588840/mirkoleo/IMG_2415_mivhhr.jpg"/></div>
        <div className="hover:scale-105 transition duration-300 hover:shadow-2xl rounded-md bg-[url('./img/1.webp')] bg-cover opacity-70 hover:opacity-100 hover:z-10 bg-center"><a aria-label='Foto' className="block w-full h-full" href="https://res.cloudinary.com/dmhsygnlc/image/upload/v1679560993/mirkoleo/1_g1tdmw.jpg"/></div>
        <div className="hover:scale-105 transition duration-300 hover:shadow-2xl rounded-md bg-[url('./img/ragazzo.webp')] bg-cover opacity-70 hover:opacity-100 hover:z-10 bg-center"><a aria-label='Foto' className="block w-full h-full" href="https://res.cloudinary.com/dmhsygnlc/image/upload/v1679479226/mirkoleo/ragazzo.jpg"/></div>               


         <div className=" col-span-1 row-span-1 rounded-md bg-gradient-to-br from-stone-700 to-stone-900 border-2 border-black flex flex-col text-white justify-evenly"> 
            <Link href='/contacts/page'>
                <div className='text-center text-3xl lg:text-5xl'>
                    <h1>CHI SONO,<br />CONTATTI</h1>
                    
                    
                </div>
                <div className='flex w-full justify-center text-3xl lg:text-5xl text-red-800'><TbHandClick /></div>
            </Link>
        
        </div>

        <div className=" col-span-1 row-span-1 rounded-md bg-gradient-to-br from-stone-700 to-stone-900 border-2 border-black flex flex-col text-white justify-around">
            <div className='block text-white text-center text-xl'>© Mirko Leo - 2023</div>
            <div className=' block text-white text-center justify-end text-xl'><a aria-label='Ignazio Marrone' href="https://www.linkedin.com/in/ignazio-marrone-080560201">Sito creato da <b className='text-red-800'>Ignazio Marrone</b> <br />ignaziomarronedev@gmail.com</a></div>

        </div>
                   
       </div>

        <div className='w-screen bg-stone-900 grid md:hidden grid-cols-1 grid-rows-2 gap-2 px-2 pb-2'>
            <div className=" col-span-1 row-span-1 rounded-md bg-gradient-to-br from-stone-700 to-stone-900 border-2 border-black flex flex-col text-white justify-evenly"> 
                <Link href='/contacts/page'>
                    <div className='text-center text-3xl lg:text-5xl'>
                        <h1>CHI SONO,<br />CONTATTI</h1>
                        
                        
                    </div>
                    <div className='flex w-full justify-center text-3xl lg:text-5xl text-red-800'><TbHandClick /></div>
                </Link>
            </div>
            <div className=" col-span-1 row-span-1 rounded-md bg-gradient-to-br from-stone-700 to-stone-900 border-2 border-black flex flex-col text-white justify-around">
                <div className='block text-white text-center'>© Mirko Leo - 2023</div>
                <div className=' block text-white text-center justify-end'><a aria-label='Ignazio Marrone' href="https://www.linkedin.com/in/ignazio-marrone-080560201">Sito creato da <b className='text-red-800'>Ignazio Marrone</b> <br />ignaziomarronedev@gmail.com </a></div>

            </div>
        </div>









      



    </div>
     
     
    )
  }
  