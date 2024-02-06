import Image from 'next/image'
import React from 'react'

export const Banner = () => {
  return (
    <div className='hidden lg:block lg:absolute lg:-z-10 lg:w-full lg:h-fit lg:top-full '>
        <Image  src="/gymBanner.jpg"
                alt="Banner foto gym"
                className="hidden lg:block lg:w-full lg:h-auto"
                width={1000}
                height={1000}
                priority/>
       </div>
  )
}
