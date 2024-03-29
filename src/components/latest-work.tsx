import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import Link from "next/link";
import Image from "next/image";

function LatestWork() {
  return (
    <Card className="col-span-2 row-span-3 flex min-h-[20rem] flex-col overflow-hidden md:row-span-2 md:min-h-[17rem]">
      <CardHeader>
        <h3 className="">latest work</h3>
      </CardHeader>
      <CardContent className="relative flex-1 p-1">
        <Link href="https://fxresearch.app/" target="_blank">
          <Image
            src="/fxresearch-1.png"
            alt="fx-research"
            fill
            className="scale-[0.99]"
          />
        </Link>
      </CardContent>
    </Card>
  );
}

export default LatestWork;
