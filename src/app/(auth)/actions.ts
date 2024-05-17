'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { loginFormSchema, signUpFormSchema } from '@/validations/profile'
import { z } from "zod"

export async function login(data: z.infer<typeof loginFormSchema>) {
  const supabase = createClient()
  const { error } = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  })
  if (error) {
    console.error(error)
    return {
      name: error.name,
      message: error.message,
      status: error.status
    };
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signUp(data: z.infer<typeof signUpFormSchema>) {
  const supabase = createClient()
  const { error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      data: {
        first_name: data.firstName,
        last_name: data.lastName,
      },
    },
  })
  if (error) {
    console.error(error)
    return {
      name: error.name,
      message: error.message,
      status: error.status
    };
  }

  revalidatePath('/', 'layout')
  redirect('/')
}