import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";

function LearningNext() {
  return (
    <Card className=" col-span-2 overflow-hidden">
      <CardHeader>
        <h3 className="">What I&apos;m learning next </h3>
      </CardHeader>
      <CardContent className="flex items-center gap-2 text-sm">
        <span>DSA</span>
        <span>SQL</span>
        <span>Drizzle</span>
      </CardContent>
    </Card>
  );
}

export default LearningNext;
