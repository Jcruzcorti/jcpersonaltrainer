"use client"


import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea"




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

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }



  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col mt-8 gap-3 bg-background p-8 rounded-lg drop-shadow-lg dark:drop-shadow-2xl ">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => ( 
            <FormItem>
            <FormLabel>Nombre y apellido</FormLabel>
            <FormControl>
              <Input placeholder="Nombre completo" {...field} />
            </FormControl>
            {/* <FormDescription>
              This is your public display name.
            </FormDescription> */}
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
            {/* <FormDescription>
              This is your public display name.
            </FormDescription> */}
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
            {/* <FormDescription>
              This is your public display name.
            </FormDescription> */}
            <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
