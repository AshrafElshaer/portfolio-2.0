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

const technologies = [
  {
    name: "TypeScript",
    Icon: () => <BiLogoTypescript color="#007acc" size={32} />,
  },
  {
    name: "Next.js",
    Icon: () => <TbBrandNextjs size={32} />,
  },
  {
    name: "React.js",
    Icon: () => <BiLogoReact size={32} color="#61dafb" />,
  },
  {
    name: "Redux",
    Icon: () => <BiLogoRedux size={32} color="#764abc" />,
  },
  {
    name: "Node.js",
    Icon: () => <BiLogoNodejs size={32} color="#68a063" />,
  },
  {
    name: "Express.js",
    Icon: () => <SiExpress size={32} />,
  },
  {
    name: "Prisma",
    Icon: () => <SiPrisma size={28} />,
  },
  {
    name: "TRPC",
    Icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 128 128"
      >
        <path
          fill="#398ccb"
          d="M0 38C0 17 17 0 38 0h52c21 0 38 17 38 38v52c0 21-17 38-38 38H38c-21 0-38-17-38-38z"
        />
        <path
          fill="#fff"
          d="M63.9 18.8L81.6 29v5.6l21.5 12.5v21.2l5.8 3.3v20.6l-17.7 10.2l-7.9-4.6l-19.2 11.1l-19.1-11l-7.7 4.5l-17.8-10.3V71.6l5.6-3.2V47.1l21-12.2V29zM81.7 40v9.6L63.9 59.8L46.2 49.6v-9.3l-16.5 9.5v16l7.6-4.4l17.8 10.3v20.5l-5.4 3.1l14.5 8.3l14.5-8.4l-5.3-3V71.7l17.8-10.3l7.4 4.3V49.8zm7.2 55.8V83.2L78.1 77v12.5zM104.3 77l-10.8 6.3v12.5l10.8-6.3zM35 95.8V83.3L24.1 77v12.5zm15.5-18.7l-10.8 6.2v12.5l10.8-6.2zm40.7 2.3l10.9-6.3l-10.9-6.2l-10.8 6.2zM37.3 66.9l-10.8 6.2l10.8 6.3l10.8-6.3zm24.3-13.6V40.8l-10.8-6.2v12.5zm15.5-18.8l-10.9 6.3v12.5L77.1 47zm-13.2 2.3l10.9-6.3l-10.9-6.2l-10.8 6.2z"
        />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    Icon: () => <SiTailwindcss size={32} color="#0769ad" />,
  },
  {
    name: "MongoDB",
    Icon: () => <SiMongodb size={32} color="#0cd45b" />,
  },
  {
    name: "PostgreSQL",
    Icon: () => <BiLogoPostgresql size={32} color="#008bb9" />,
  },
];

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
