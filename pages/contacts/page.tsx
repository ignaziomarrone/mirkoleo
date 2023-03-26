'use client'

import Navbar from "../navbar/page"
import Link from "next/link"
import { BsInstagram } from "react-icons/bs"

export default function Contacts() {

  const url = 'https://instagram.com/mirkoleo_fotografo?igshid=YmMyMTA2M2Y='

  return (
    <div>
        <Navbar />
        <div className="w-screen h-screen  bg-gradient-to-br from-stone-700 to-stone-900  flex flex-col justify-between pt-16 overflow-scroll">
            <div className=" m-2 text-white text-center ">    
                <h1 className='text-4xl text-red-800'> <b>MIRKO LEO</b> </h1>
                <br />
                <p className=''>Dietro ogni scatto si nasconde una storia, che racconto sia a colori che in bianco e nero, con fantasia e professionalità.<br />
                <br />La fotografia è un&apos;arte, un modo di vivere. Prima di un lavoro, per me è una passione.</p>                  
            </div>
            <hr className='w-1/2 mx-auto'/>
            <div className="text-center text-white ">
                
                <h1 className='text-red-800 text-4xl'> <b>FORMAZIONE</b> </h1>
                <br />
                <p>Accademia di Belle Arti di Palermo - Comunicazione e Fotografia</p>
                <br />
                
            </div>
            <hr className='w-1/2 mx-auto'/>

            <div className='text-white'>
                <h1 className=' text-red-800 text-center text-4xl'><b>CONTATTI</b></h1>    
                <br />    
                <div className='text-center'>  
                    <a aria-label='Mobile phone' href='tel:+393519257894'>+39 351 9257894</a>
                </div>
                <div className='text-center'>  
                    <a aria-label='Mail' href='mailto:mirkoleofotografo@gmail.com'>mirkoleofotografo@gmail.com</a>
                </div>
                <div className='flex w-full text-2xl justify-center pt-1'> 
                    <a aria-label='Instagram' href={url} className=''><BsInstagram/></a>
                </div>     
                <br />
                
            </div>   
                <div className='text-white text-center'><a aria-label='Ignazio Marrone' href="https://www.linkedin.com/in/ignazio-marrone-080560201">Sito creato da <b className='text-red-800'>Ignazio Marrone</b></a></div>
            
            </div>
    </div>
  )
}
