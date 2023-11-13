import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";

function FeaturedProjects() {
  return (
    <Card className="col-span-2 row-span-2 flex min-h-[50px] flex-col overflow-hidden">
      <CardHeader>
        <h3 className="">featured projects</h3>
      </CardHeader>
      <CardContent className="flex-1">
        <p> hello </p>
      </CardContent>
    </Card>
  );
}

export default FeaturedProjects;
