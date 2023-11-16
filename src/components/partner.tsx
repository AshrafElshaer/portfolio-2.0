import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";

function Partner() {
  return (
    <Card className="flex h-44 flex-col ">
      <CardHeader className="justify-between">
        <h3 className="">partner in crime</h3>
        <span>cesar</span>
      </CardHeader>
      <CardContent className="relative flex-1 p-1">
        <Image
          src="/cesar.jpeg"
          alt="cesar img"
          className="w-full scale-[0.99] object-fit"
          fill
        />
      </CardContent>
    </Card>
  );
}

export default Partner;
