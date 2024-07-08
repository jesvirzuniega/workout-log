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
  redirect('/planner')
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

export async function signOut() {
  const supabase = createClient()
  const { error } = await supabase.auth.signOut()
  if (error) throw error
  redirect('/login')
}

export async function signInWithGoogle() {
  const supabase = createClient()
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      // TODO: find a way to dynamically get the origin
      redirectTo: `http://localhost:5000/auth/callback`,
    },
  })
  if (error) throw error
  redirect(data.url)
}