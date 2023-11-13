import { Card, CardContent, CardHeader } from "./ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import {
  BiLogoTypescript,
  BiLogoReact,
  BiLogoRedux,
  BiLogoPostgresql,
  BiLogoNodejs,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress, SiMongodb, SiPrisma, SiTailwindcss } from "react-icons/si";
import { technologies } from "@/data";



function Technologies() {
  return (
    <Card className="col-span-2 min-h-[50px]">
      <CardHeader>
        <h3 className="">technologies</h3>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-4">
        {technologies.map((tech) => (
          <TooltipProvider delayDuration={50} key={tech.name}>
            <Tooltip>
              <TooltipTrigger>
                <tech.Icon />
              </TooltipTrigger>
              <TooltipContent>
                <span>{tech.name}</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </CardContent>
    </Card>
  );
}

export default Technologies;
