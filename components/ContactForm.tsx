"use client"


import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea"
import { toast } from "sonner"





const formSchema = z.object({
  username: z.string().min(8, {
    message: "Mínimo 8 caracteres",
  }),
  email: z.string().email().min(8, {
    message: "Formato email",
  }),
  text: z.string().min(8, {
    message: "Mínimo 8 caracteres",
  }),
})

export function ContactForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      text: ""

    },
  })
  
  const toastNotification = () => (
    toast("Mensaje enviado", {
        description: "Su mensaje fue enviado y pronto estaremos en contacto",
     } ))


  function onSubmit(values: z.infer<typeof formSchema>) {
    toastNotification()

    console.log(values)

    setTimeout(() => {
      window.location.href = "/";
    }, 4000);
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col mt-8 gap-3 bg-background p-8 rounded-lg drop-shadow-xl  ">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre y apellido</FormLabel>
              <FormControl>
                <Input placeholder="Nombre completo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mail</FormLabel>
              <FormControl>
                <Input placeholder="ejemplo@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensaje</FormLabel>
              <FormControl>
                <Textarea placeholder="Escriba su mensaje aquí" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Enviar</Button>
      </form>
    </Form>
  )
}
