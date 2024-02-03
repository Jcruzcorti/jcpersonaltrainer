'use client'

import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


interface Props {
    children?: any  
}

export const AosAnimated = ({children}:Props) => {


    useEffect(() => {
        AOS.init({
          delay: 100,
          duration: 400,
        });
      });

  return (
    <div className="flex flex-col lg:flex-row " data-aos="fade-up">{children}</div>
  )
}
