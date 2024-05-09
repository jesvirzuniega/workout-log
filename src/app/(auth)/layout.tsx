import Image from "next/image"

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-screen">
      <div className="w-1/2 bg-zinc-900 relative">
        <h1 className="absolute text-2xl font-semibold p-10 z-[2]">workout.log</h1>
        <Image 
          src="/images/jeff2.jpg"
          objectFit="cover"
          fill={true}
          priority={true}
          alt='background'
          quality={100}
          loading="eager"
        />
      </div>
      <div className="p-10 w-1/2">
        {children}
      </div>
    </div>
  )
}
