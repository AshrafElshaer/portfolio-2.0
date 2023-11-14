import { Card, CardContent, CardHeader } from "./ui/card";

function About() {
  return (
    <Card className="col-span-2 ">
      <CardHeader>
        <h3 className="">about</h3>
      </CardHeader>
      <CardContent className="py-6 text-sm ">
        <p>
          {" "}
          Am Ash , A self-taught fullstack devoloper passionate about crafting
          seamless user experiences and staying ahead in the ever-evolving tech
          landscape. Let&apos;s build innovative solutions together !{" "}
        </p>
      </CardContent>
    </Card>
  );
}

export default About;
