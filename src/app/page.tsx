import Header from "@/components/header";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl p-4">
      <Header />
      <div className="mx-auto w-full max-w-6xl px-4 pt-8">
        <div className="grid grid-flow-row-dense gap-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          <Card className="sm:h-40">
            <CardHeader>
              <h3 className="">location</h3>
              <span className="text-muted-foreground">🇺🇸 USA</span>
            </CardHeader>
            <CardContent>
              <p> hello </p>
            </CardContent>
          </Card>
          <Card className="sm:h-40">
            <CardHeader>
              <h3 className="">mode</h3>
            </CardHeader>
            <CardContent>
              <p> hello </p>
            </CardContent>
          </Card>
          <Card className="col-span-2 ">
            <CardHeader>
              <h3 className="">about</h3>
            </CardHeader>
            <CardContent>
              <p> hello </p>
            </CardContent>
          </Card>
          <Card className="col-span-2 row-span-2 overflow-hidden">
            <CardHeader>
              <h3 className="">experience</h3>
            </CardHeader>
            <CardContent>
              <p> hello </p>
            </CardContent>
          </Card>
          <Card className="col-span-2 row-span-2 min-h-[50px]">
            <CardHeader>
              <h3 className="">projects</h3>
            </CardHeader>
            <CardContent>
              <p> hello </p>
            </CardContent>
          </Card>
          <Card className="col-span-2 min-h-[50px]">
            <CardHeader>
              <h3 className="">skills</h3>
            </CardHeader>
            <CardContent>
              <p> hello </p>
            </CardContent>
          </Card>
          <Card className="col-span-2 row-span-3 min-h-[50px] overflow-hidden md:row-span-2">
            <CardHeader>
              <h3 className="">latest work</h3>
            </CardHeader>
            <CardContent>
              <p> hello </p>
            </CardContent>
          </Card>
          <Card className=" col-span-2 overflow-hidden">
            <CardHeader>
              <h3 className="">side projects</h3>
            </CardHeader>
            <CardContent>
              <p> hello </p>
            </CardContent>
          </Card>
          <Card className="h-44 ">
            <CardHeader>
              <h3 className="">qute</h3>
            </CardHeader>
            <CardContent>
              <p> hello </p>
            </CardContent>
          </Card>{" "}
          <Card className="h-44">
            <CardHeader>
              <h3 className="">years of experience</h3>
            </CardHeader>
            <CardContent>
              <p> hello </p>
            </CardContent>
          </Card>
          <Card className="h-44 ">
            <CardHeader>
              <h3 className="">resume</h3>
            </CardHeader>
            <CardContent>
              <p> hello </p>
            </CardContent>
          </Card>
          <Card className="h-44">
            <CardHeader>
              <h3 className="">newsletter</h3>
            </CardHeader>
            <CardContent>
              <p> hello </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
