import { z } from "zod"

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export const signUpFormSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email().min(5),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
  confirm: z.string(),
})
.required()
.refine((data) => data.password === data.confirm, {
  message: "Passwords don't match",
  path: ["confirm"], // path of error
})