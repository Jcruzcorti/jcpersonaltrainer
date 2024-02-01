import { CarouselCard } from "@/components/CarouselCards";
import { ContactForm } from "@/components/ContactForm";
import { NavBar } from "@/components/NavBar";
import { Presentation } from "@/components/Presentation";
import { Services } from "@/components/Services";
import Image from "next/image";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 lg:justify-evenly lg:p-12  ">    
      
      <NavBar/>
      <Presentation/>
      <CarouselCard/>
      <Services/>
      <ContactForm/>
      
    </main>
  );
}
