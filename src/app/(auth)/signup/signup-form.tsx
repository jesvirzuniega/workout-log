"use client"

import { Button } from "@/components/ui/button"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { signUpFormSchema } from '@/validations/profile'
import { EnvelopeOpenIcon } from "@radix-ui/react-icons"
import { signUp } from '../actions'

export default function SignUpForm() {

  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
  })

  async function onSubmit(values: z.infer<typeof signUpFormSchema>) {
    const error = await signUp(values)
    console.error(error)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="grid gap-2">
                <FormLabel htmlFor="firstName">First name</FormLabel>
                <FormControl>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    required
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="grid gap-2">
                <FormLabel htmlFor="lastName">Last name</FormLabel>
                <FormControl>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="John"
                    required
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="grid gap-2">
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormControl>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="grid gap-2">
              <div className="flex items-center">
                <FormLabel htmlFor="password">Password</FormLabel>
              </div>
              <FormControl>
                <Input
                  id="password"
                  type="password"
                  required
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirm"
          render={({ field }) => (
            <FormItem className="grid gap-2">
              <div className="flex items-center">
                <FormLabel htmlFor="confirm">Confirm password</FormLabel>
              </div>
              <FormControl>
                <Input
                  id="confirm"
                  type="password"
                  required
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Create an account
        </Button>
        <Button variant="outline" className="w-full">
          <EnvelopeOpenIcon className="mr-2"/>
          Sign up with Gmail
        </Button>
      </form>
    </Form>
  )
}
