"use client"

import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"
import Link from "next/link"

export const ButtonHome = () => {


  return (
    <div className="sticky bottom-0 flex items-end justify-end  p-8">
      <Link href={'/'}>
        <Button variant="outline" size="icon" className="rounded-lg shadow-xl border-solid border-slate-300 dark:border-backround ">
          <Home/>
        </Button>
        </Link>
    </div>
  )
}
