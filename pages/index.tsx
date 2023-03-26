'use client'

import About from "./about/page"
import Last from "./last/page"
import Navbar from "./navbar/page"
import Backtotop from "./backtotop/page"


export default function Home() {

  const scrollBottom = () => {
    window.scrollTo({top: 100000, behavior: 'smooth'})
}

  return (
    <div>
      <Navbar />


      <div className="w-screen h-screen bg-stone-900 hidden md:grid grid-cols-3 grid-rows-3 gap-2 pb-1 p-2 pt-16 ">
        <div className="bg-stone-900 bg-[url('./img/BIANCO.webp')] bg-contain bg-no-repeat bg-center hover:cursor-pointer"><a className="block w-full h-full" onClick={scrollBottom}/></div>
        <div className="bg-white hover:scale-105 transition duration-300 hover:shadow-2xl rounded-md bg-[url('./img/ragazza1.webp')] bg-cover opacity-70 hover:opacity-100 hover:z-10 bg-center"><a aria-label='Foto' className="block w-full h-full" href="https://res.cloudinary.com/dmhsygnlc/image/upload/v1679584831/mirkoleo/ragazza1_hud6tn.jpg"/></div>
        <div className="bg-white hover:scale-105 transition duration-300 hover:shadow-2xl rounded-md bg-[url('./img/ragazza2.webp')] bg-cover opacity-70 hover:opacity-100 hover:z-10 bg-center"><a aria-label='Foto' className="block w-full h-full" href="https://res.cloudinary.com/dmhsygnlc/image/upload/v1679479222/mirkoleo/ragazza2.jpg"/></div>
        <div className="bg-white col-span-2 row-span-2 hover:scale-105 transition duration-300 hover:shadow-2xl rounded-md bg-[url('./img/glasses.webp')] bg-cover hover:z-10 bg-center"><a aria-label='Foto' className="block w-full h-full" href="https://res.cloudinary.com/dmhsygnlc/image/upload/v1679479217/mirkoleo/glasses.jpg"/></div>
        <div className="bg-white hover:scale-105 transition duration-300 hover:shadow-2xl rounded-md bg-[url('./img/mano.webp')] bg-cover opacity-70 hover:opacity-100 hover:z-10 bg-center"><a aria-label='Foto' className="block w-full h-full" href="https://res.cloudinary.com/dmhsygnlc/image/upload/v1679479218/mirkoleo/mano.jpg"/></div>
        <div className="bg-white hover:scale-105 transition duration-300 hover:shadow-2xl rounded-md bg-[url('./img/fuoco1.webp')] bg-cover opacity-70 hover:opacity-100 hover:z-10 bg-center"><a aria-label='Foto' className="block w-full h-full" href="https://res.cloudinary.com/dmhsygnlc/image/upload/v1679585175/mirkoleo/fuoco1_vxpqsq.jpg"/></div>
      </div>

      <div className="w-screen h-screen bg-stone-900 md:hidden grid gap-2 pb-1 p-2">
        <div className="bg-stone-900 bg-[url('./img/BIANCO.webp')] bg-contain bg-no-repeat bg-center col-span-2"><a className="block w-full h-full" onClick={scrollBottom}/></div>
        <div className="bg-white rounded-md bg-[url('./img/ragazza1.webp')] bg-cover bg-center"><a aria-label='Foto' className="block w-full h-full" href="https://res.cloudinary.com/dmhsygnlc/image/upload/v1679584831/mirkoleo/ragazza1_hud6tn.jpg"/></div>
        <div className="bg-white rounded-md bg-[url('./img/ragazza2.webp')] bg-cover bg-center"><a aria-label='Foto' className="block w-full h-full" href="https://res.cloudinary.com/dmhsygnlc/image/upload/v1679479222/mirkoleo/ragazza2.jpg"/></div>
        <div className="bg-white col-span-2 row-span-2 rounded-md bg-[url('./img/glasses.webp')] bg-cover bg-center"><a aria-label='Foto' className="block w-full h-full" href="https://res.cloudinary.com/dmhsygnlc/image/upload/v1679479217/mirkoleo/glasses.jpg"/></div>
        <div className="bg-white rounded-md bg-[url('./img/mano.webp')] bg-cover bg-center"><a aria-label='Foto' className="block w-full h-full" href="https://res.cloudinary.com/dmhsygnlc/image/upload/v1679479218/mirkoleo/mano.jpg"/></div>
        <div className="bg-white rounded-md bg-[url('./img/fuoco1.webp')] bg-cover bg-center"><a aria-label='Foto' className="block w-full h-full" href="https://res.cloudinary.com/dmhsygnlc/image/upload/v1679585175/mirkoleo/fuoco1_vxpqsq.jpg"/></div>
      </div>

    <Backtotop />
    <Last />
    <About />
    </div>
    
  )
}
