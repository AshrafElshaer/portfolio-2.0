import { education, experience } from "@/data";
import { Card, CardContent, CardHeader } from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

function Experiance() {
  return (
    <Card className="col-span-2 row-span-2 flex flex-col overflow-hidden">
      <CardHeader>
        <h3 className="">experiance</h3>
      </CardHeader>
      <CardContent className="flex-1 p-0">
        {experience.map((item) => (
          <Link
            href={item.link}
            target="_blank"
            key={item.id}
            className="glassHover relative flex items-center justify-between gap-2 border-b px-4 py-2"
          >
            <div className="flex w-full flex-col items-start justify-start ">
              <h4 className="text-sm">{item.company}</h4>

              <span className=" text-xs text-secondary-foreground/80">
                {item.position}
              </span>
            </div>
            <span className="min-w-fit text-xs text-secondary-foreground/80 ">
              {item.duration}
            </span>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}

export default Experiance;
