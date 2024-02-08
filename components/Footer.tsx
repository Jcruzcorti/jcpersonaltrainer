import Image from "next/image"
import Link from "next/link"


export const Footer = () => {
  return (
    <div className="flex flex-row items-center justify-center text-center gap-3 p-6 w-full border-t-2 border-bg-background dark:border-bg-background lg:p-12 ">
      <h3 className="">©2023 JC Personal Trainer </h3>
      <Link href={'/'}>
        <Image
          src="/instagram.png"
          alt="Jc personal trainer instagram"
          className=" w-6 lg:w-7"
          width={100}
          height={25}
          priority />
      </Link>
      <Link href={'/'}>
        <Image
          src="/whatsapp.png"
          alt="Jc personal trainer instagram"
          className="w-5 lg:w-6"
          width={100}
          height={25}
          priority />
      </Link>
    </div>
  )
}
