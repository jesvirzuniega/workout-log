"use client"
import Link from "next/link"

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
import { loginFormSchema } from '@/validations/profile'
import { login } from '../actions'

export default function LoginForm() {

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    const error = await login(values)
    if (error && error.status === 400) {
      form.setError('password', { message: 'Incorrect email or password'})
      form.setFocus('password')
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
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
                <Link href="#" className="ml-auto inline-block text-sm underline">
                  Forgot your password?
                </Link>
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
        <Button type="submit" className="w-full">
          Login
        </Button>
        {/* TODO: Google SSO */}
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </form>
    </Form>
  )
}
