
import { Card, CardContent, CardHeader } from "./ui/card";

function Mode() {
  return (
    <Card className="sm:h-40">
      <CardHeader>
        <h3 className="">mode</h3>

        <div className=" flex h-2 w-2 items-center justify-center ">
          <span className="animation-delay-4000 absolute  flex h-2 w-2  animate-ping rounded-full  bg-lime-500 opacity-75"></span>
          <span className=" relative inline-flex h-1 w-1 rounded-full bg-lime-500"></span>
        </div>
      </CardHeader>
      <CardContent className="pt-4 text-center text-sm">
        <span>
          Available for Full stack projects. Hit me up for a collab
          <br />
          🦾
        </span>
      </CardContent>
    </Card>
  );
}

export default Mode;
