import { Card, CardContent, CardHeader } from "./ui/card";

function About() {
  return (
    <Card className="col-span-2 ">
      <CardHeader>
        <h3 className="">about</h3>
      </CardHeader>
      <CardContent className="text-sm py-6 ">
        <p>
          {" "}
         Am Ash , Passionate about crafting seamless user experiences and staying ahead
          in the ever-evolving tech landscape. Let&apos;s build innovative
          solutions together!{" "}
        </p>
      </CardContent>
    </Card>
  );
}

export default About;
