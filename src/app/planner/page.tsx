import Navbar from "@/components/navbar";
import PrivateRoute from "@/components/private-route"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Planner() {
  return (
    <PrivateRoute>
      <Navbar/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-center text-sm lg:flex">
          <Card>
            <CardHeader>
              <CardTitle>Planner</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </main>
    </PrivateRoute>
  );
}
