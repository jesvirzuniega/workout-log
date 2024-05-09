'use client'
import { usePathname } from 'next/navigation'
import Image from "next/image"

export default function AuthBackgroundImage() {
  const pathname = usePathname()
  const imageSrc = `/images/jeff${pathname == '/login' ? 1 : 2}.jpg`

  return (
    <Image 
      src={imageSrc}
      objectFit="cover"
      fill={true}
      priority={true}
      alt='background'
      quality={100}
    />
  )
}