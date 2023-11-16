import { education } from "@/data";
import { Card, CardContent, CardHeader } from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function Education() {
  return (
    <Card className="col-span-2 row-span-2 flex flex-col overflow-hidden">
      <CardHeader>
        <h3 className="">education</h3>
      </CardHeader>
      <CardContent className="flex-1 p-0">
        {education.map((item) => (
          <div
            key={item.id}
            className="border-b relative flex justify-between items-center gap-2 px-4 py-2"
          >
             <span className="text-xs text-secondary-foreground/80 min-w-fit ">
              {item.duration}
            </span>
            <div className="flex flex-col w-full items-end justify-start ">
              <h4 className="text-sm">{item.degree}</h4>

              <span className=" text-xs text-secondary-foreground/80">
                {item.school}
              </span>
            </div>
           
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default Education;
