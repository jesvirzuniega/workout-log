'use client'
import { usePathname } from 'next/navigation'
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AuthNavigation({ className = '' }: { className?: string }) {
  const pathname = usePathname()
  const isLogin = pathname === '/login'

  return (
    <div className={`flex justify-end ${className}`}>
      <Link href={!isLogin ? '/login' : '/signup'}>
        <Button variant="ghost" className="w-fit text-md font-semibold">
          {!isLogin ? 'Login' : 'Sign up'}
        </Button>
      </Link>
    </div>
  )
}