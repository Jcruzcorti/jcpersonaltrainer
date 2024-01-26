import React from 'react'
import { Button } from './ui/button'

export const Presentation = () => {
    
  return (
    <div className="flex flex-col gap-3 items-center justify-center lg:flex ">
        <h1 className="scroll-m-20  text-3xl text-center font-serif font-normal tracking-tight lg:text-6xl lg:tracking-wide">
          Transforma tu vida AHORA
        </h1>
        <h3 className="scroll-m-20 text-base text-center font-light font-serif tracking-tight lg:text-2xl ">
          Alcanza tus objetivos fitness con nuestro entrenamiento personalizado y profesional
        </h3>
        <Button variant="default" className="w-28 h-auto ">Comienza ya</Button>
      </div>
  )
}
