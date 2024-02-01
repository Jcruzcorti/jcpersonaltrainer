import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";


export function CarouselCard() {

  const carrouselImages: { tittle: string; img: string; key: number }[] = [
    {
      key: 1,
      tittle: 'Gym photo 1',
      img: '/barraolimpica.jpg'
    },
    {
      key: 2,
      tittle: 'Gym photo 2',
      img: '/woman.jpg'
    },
    {
      key: 3,
      tittle: 'Gym photo 3',
      img: '/kettlebell.jpg'
    },
    {
      key: 4,
      tittle: 'Gym photo 4',
      img: '/girl.jpg'
    },
    {
      key: 5,
      tittle: 'Gym photo 5',
      img: '/barra.jpg'
    },
    {
      key: 6,
      tittle: 'Gym photo 6',
      img: '/workout2.jpg'
    },

  ]

  return (
    <>

      <div className="relative flex-col p-6 place-items-center pt-28 lg:pt-0 ">
        <Carousel className="w-full max-w-xs lg:max-w-lg ">
          <CarouselContent>
            {carrouselImages.map((item) => (
              <CarouselItem key={item.key} className="">
                <div className=" p-1 lg:p-4 " >
                  <Card className="bg-background ">
                    <CardContent className="flex items-center justify-center p-2 lg:p-2">
                      {/* <div className="h-full w-full overflow-hidden"> */}
                      <Image
                        className="relative rounded-xs w-full h-auto"
                        src={item.img}
                        alt={item.tittle}
                        width="0"
                        height="0"
                        sizes="100vw"
                        priority
                      />
                      {/* </div> */}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

      </div>
    </>

  )
}
