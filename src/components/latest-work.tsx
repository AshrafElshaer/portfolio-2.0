import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import Link from "next/link";
import Image from "next/image";

function LatestWork() {
  return (
    <Card className="col-span-2 row-span-3 flex min-h-[50px] flex-col overflow-hidden md:row-span-2">
      <CardHeader className="z-20">
        <h3 className="">latest work</h3>
      </CardHeader>
      <CardContent className="relative flex-1 p-1">
        <Link href="https://fx-research.vercel.app/" target="_blank">
          <Image
            src="/fxresearch-1.png"
            alt="fx"
            layout="fill"
            className="z-10 transition-all duration-300 ease-in-out hover:scale-150"
          />
        </Link>
      </CardContent>
    </Card>
  );
}

export default LatestWork;
