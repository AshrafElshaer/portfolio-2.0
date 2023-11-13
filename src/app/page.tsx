import About from "@/components/about";
import FeaturedProjects from "@/components/featured-project";
import Header from "@/components/header";
import Location from "@/components/location";
import Mode from "@/components/mode";
import Quote from "@/components/quote";
import Technologies from "@/components/technologies";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import YearsOfExperience from "@/components/years-of-experience";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl p-4">
      <Header />
      <div className="mx-auto w-full max-w-6xl pt-8">
        <div className="grid grid-flow-row-dense gap-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          <Location />
          <Mode />
          <About />
          <Card className="col-span-2 row-span-2 overflow-hidden">
            <CardHeader>
              <h3 className="">experience</h3>
            </CardHeader>
            <CardContent>
              <p> hello </p>
            </CardContent>
          </Card>
          <FeaturedProjects />
          <Technologies />
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
          <Quote />
          <YearsOfExperience />
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
