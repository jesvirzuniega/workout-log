import { Input } from "@/components/ui/input"
import { EnvelopeOpenIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function SignUp() {
  return (
    <>
      <div className="flex justify-end">
        <Link href="/login">
          <Button variant="ghost" className="w-fit text-md font-semibold">Login</Button>
        </Link>
      </div>
      <div className="flex h-full justify-center items-center mt-[-40px]">
        <Card className="text-center max-w-md">
          <CardHeader>
            <CardTitle>Create an account</CardTitle>
            <CardDescription>Enter your email below to create your account</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="px-8">
              <Input className="mb-3" type="email" placeholder="name@example.com" />
              <Button className="text-sm w-full mb-3">Sign in with email</Button>
              <Separator className="my-4 relative flex justify-center">
                <div className="bg-zinc-950 px-6 text-muted-foreground bottom-[-12px] left-1/2 right-1/2 uppercase text-xs font-semibold my-[-6px]">Or continue with</div>
              </Separator>
              <Button className="text-sm mt-3 w-full mb-3"><EnvelopeOpenIcon className="mr-2" /> Gmail</Button>
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">By clicking continue, you agree to our Terms of Service and Privacy Policy.</p>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}