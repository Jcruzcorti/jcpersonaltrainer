
import { CarouselCard } from "@/components/CarouselCards";
import { ContactAboutUs } from "@/components/ContactAboutUs";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { Presentation } from "@/components/Presentation";
import { Services } from "@/components/Services";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 lg:justify-evenly lg:p-12  ">    
      
      <NavBar/>
      <Presentation/>
      <CarouselCard/>
      <Services/>
      <ContactAboutUs/>
      <Footer/>
    </main>
  );
}
