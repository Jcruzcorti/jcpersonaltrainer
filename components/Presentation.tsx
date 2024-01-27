import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'


export const Presentation = () => {
    
  return (
    <div className="flex flex-col gap-3 items-center justify-center">
      {/* <div className='relative w-full'> */}
       <div className='absolute -z-10 w-full '>
        <Image  src="/gymBanner.jpg"
                alt="Banner foto gym"
                className=" w-full "
                width={1000}
                height={1000}
                priority/>
       </div>

          <h1 className="scroll-m-20  text-3xl text-slate-50 text-center font-serif font-normal tracking-tight lg:text-6xl lg:tracking-wide">
              Transforma tu vida AHORA
            </h1>
            <h3 className="scroll-m-20 text-base text-slate-50 text-center font-light font-serif tracking-tight lg:text-2xl ">
              Alcanza tus objetivos fitness con nuestro entrenamiento personalizado y profesional
            </h3>
          <Link href={'/'}>
            <Button variant="default" className="w-28 h-auto ">Comienza ya</Button>
          </Link>
      {/* </div> */}
        
      </div>
  )
}
