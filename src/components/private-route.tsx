import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function PrivateRoute({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient()
  const { data, error } = await supabase.auth.getUser()
  // TODO: add referrer as param in login
  if (error || !data?.user) return redirect('/login')

  return <>{children}</>
}