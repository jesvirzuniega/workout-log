import AuthNavigation from "./components/auth-navigation";
import AuthBackgroundImage from "./components/auth-background-image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-screen">
      <div className="w-1/2 bg-zinc-900 relative">
        <h1 className="absolute text-2xl font-semibold p-10 z-[2]">workout.log</h1>
        <AuthBackgroundImage />
      </div>
      <div className="p-10 w-1/2">
        <AuthNavigation />
        <div className="flex h-full justify-center items-center mt-[-40px]">
          {children}
        </div>
      </div>
    </div>
  )
}
