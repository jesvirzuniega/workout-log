export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-screen">
      <div className="p-10 w-1/2 bg-zinc-900">
        <h1 className="text-2xl font-semibold">workout.log</h1>
      </div>
      <div className="p-10 w-1/2">
        {children}
      </div>
    </div>
  )
}
