
import { Button } from './ui/button'
import Link from 'next/link'
import { Banner } from './Banner'


export const Presentation = () => {

  return (
    <div className="flex flex-col items-center justify-center gap-3 p-3">
      <Banner />
      <h1 className="scroll-m-20 pt-8 text-3xl text-center font-sans font-normal tracking-tight lg:text-6xl lg:text-slate-50 lg:tracking-wide lg:pt-2">
        Transforma tu vida AHORA
      </h1>
      <h3 className="scroll-m-20 text-lg text-center font-sans font-normal tracking-tight lg:text-2xl lg:text-slate-50 ">
        Alcanza tus objetivos fitness con nuestro entrenamiento personalizado y profesional
      </h3>
      <Link href={'#ContactForm'} className="pt-2">
        <Button variant="default" className="w-28 h-auto ">Comienza ya</Button>
      </Link>
    </div>
  )
}
