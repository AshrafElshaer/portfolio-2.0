import About from "@/components/about";
import Education from "@/components/education";
import FeaturedProjects from "@/components/featured-project";
import Header from "@/components/header";
import LatestWork from "@/components/latest-work";
import LearningNext from "@/components/learning-next";
import Location from "@/components/location";
import Mode from "@/components/mode";
import Partner from "@/components/partner";
import Quote from "@/components/quote";
import Technologies from "@/components/technologies";
import YearsOfExperience from "@/components/years-of-experience";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl p-4">
      <Header />
      <div className=" w-full  pt-8">
        <div className="grid grid-flow-row-dense gap-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          <Location />
          <Mode />
          <About />
          <Education />
          <FeaturedProjects />
          <Technologies />
          <LatestWork />
          <LearningNext />
          <Quote />
          <YearsOfExperience />
          <Partner />
        </div>
      </div>
    </main>
  );
}
