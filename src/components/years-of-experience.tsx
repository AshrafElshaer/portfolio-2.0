import { Card, CardContent, CardHeader } from "./ui/card";

function YearsOfExperience() {
  return (
    <Card className="flex h-44 flex-col">
      <CardHeader>
        <h3 className="">years of experience</h3>
      </CardHeader>
      <CardContent className="flex flex-1 items-center justify-center text-7xl">
        <span className="heading-bg">1</span>
      </CardContent>
    </Card>
  );
}

export default YearsOfExperience;
