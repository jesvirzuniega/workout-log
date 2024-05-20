import AuthNavigation from "./components/auth-navigation";
import AuthBackgroundImage from "./components/auth-background-image";
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient()
  const { data, error } = await supabase.auth.getUser()
  if (!error && data?.user) return redirect('/')

  return (
    <div className="flex h-screen w-screen">
      <div className="w-1/2 bg-zinc-900 relative">
        <h1 className="absolute text-2xl font-semibold p-10 z-[2]">workout.log</h1>
        <AuthBackgroundImage />
      </div>
      <div className="p-10 w-1/2">
        <AuthNavigation />
        <div className="flex h-full justify-center items-center mt-[-40px]">
          <div className="w-full max-w-[362px]">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
