import Image from 'next/image'
import React from 'react'
import { ModeToggle } from './ModeToggle'
import Link from 'next/link'

export const NavBar = () => {

    return (
        <div className="flex flex-row z-10 max-w-5xl w-full items-center justify-around font-mono text-sm lg:flex lg:pb-20 lg:justify-between">
            <Link href={'/'}>
                <Image
                    src="/logogym.png"
                    alt="Jc personal trainer Logo"
                    className="dark:invert w-16 lg:w-24"
                    width={100}
                    height={24}
                    priority
                />
            </Link>

            <h3 className="text-base font-light tracking-tight font-serif lg:text-2xl lg:text-slate-50">
                JC PERSONAL TRAINER
            </h3>

            <div className="fixed bottom-0 left-0 flex h-48  p-5 w-full items-end justify-end  lg:static lg:h-auto lg:w-auto lg:bg-none">
                <ModeToggle />
            </div>
            
        </div>
    )
}
