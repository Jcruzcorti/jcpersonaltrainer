import { AboutUs } from "./AboutUs"
import { ContactForm } from "./ContactForm"


export const ContactAboutUs = () => {

  return (
    <div id={'ContactForm'} className="flex flex-col p-5 lg:flex-row lg:items-center lg:justify-around ">
        <AboutUs/>
        <ContactForm/>
    </div>
  )
}
