import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image";



export const Services = () => {


    const cardServices: { tittle: string; img: string; key: number, description: string }[] = [
        {
            key: 1,
            tittle: 'Entrenamiento personalizado',
            img: '/workout.jpg',
            description: 'Obtén un plan de ejercicios adaptado a tus necesidades y objetivos, con supervisión presencial o a distancia'
        },
        {
            key: 2,
            tittle: 'Asesoría nutricional',
            img: '/food.jpg',
            description: 'Recibe recomendaciones profesionales para mejorar tu alimentación y potenciar los resultados de tus entrenamientos'
        },
        {
            key: 3,
            tittle: 'Entrenamiento de fuerza',
            img: '/boy.jpg',
            description: 'Mejora tu resistencia y tonifica tus músuclos con nuestro programa de entrenamiento de fuerza, diseñado para todos los nieveles'
        },

    ]


    return (
        <>
            <h2 className="font-sans p-8 text-3xl font-bold tracking-tight ">
                SERVICIOS
            </h2>

            <div className="flex flex-col lg:flex-row">
                {
                    cardServices.map((card) => (
                        <div key={card.key} className=" p-2 lg:p-4 ">
                            <Card className=" bg-background ">
                                <CardContent className=" relative flex flex-col gap-3 items-center justify-center p-0 lg:p-0 ">
                                    <Image
                                        className="relative rounded-md w-full h-auto inset-0 bg-black dark:bg-white opacity-40 "
                                        src={card.img}
                                        alt={card.tittle}
                                        width="0"
                                        height="100"
                                        sizes="100vw"
                                        

                                    />
                                    <div className="absolute  ">
                                        <CardTitle className=" text-slate-950 dark:text-slate-50 text-center ">{card.tittle}</CardTitle>
                                        <CardDescription className=" p-3 font-bold text-slate-950 dark:text-slate-50 text-center">{card.description}</CardDescription>
                                    </div>

                                </CardContent>
                            </Card>

                        </div>
                    ))
                }
            </div>


        </>
    )
}
