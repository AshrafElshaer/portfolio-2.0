import {
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiFirebase,
  SiNextdotjs,
  SiPrisma,
  SiTrpc,
  SiSupabase,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { ReactNode } from "react";
import {
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoRedux,
  BiLogoTypescript,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";

type IconName =
  | "typescript"
  | "react"
  | "next"
  | "redux"
  | "tailwind"
  | "node"
  | "express"
  | "mongoDB"
  | "github"
  | "firebase"
  | "linkedIn"
  | "prisma"
  | "trpc"
  | "supabase"
  | "postgreSQL";

type Options = {
  color?: string;
  size?: number;
};
const Icons: Record<IconName, (props: Options) => ReactNode> = {
  react: ({ size = 32 }) => <BiLogoReact color={"#61dafb"} size={size} />,
  typescript: ({ size = 32 }) => (
    <BiLogoTypescript color="#007acc" size={size} />
  ),
  next: ({ color, size = 32 }) => <TbBrandNextjs color={color} size={size} />,
  redux: ({ size = 32 }) => <BiLogoRedux color="#764abc" size={size} />,
  tailwind: ({ size = 32 }) => <SiTailwindcss color="#0769ad" size={size} />,
  node: ({ size = 32 }) => <BiLogoNodejs color="#68a063" size={size} />,
  express: ({ color, size = 32 }) => <SiExpress color={color} size={size} />,
  mongoDB: ({ size = 32 }) => <SiMongodb color="#0cd45b" size={size} />,
  github: ({ color, size = 32 }) => <AiFillGithub color={color} size={size} />,
  firebase: ({ color, size = 32 }) => (
    <SiFirebase color={"#FFCA28 "} size={size} />
  ),
  linkedIn: ({ color, size = 32 }) => (
    <AiFillLinkedin color={color} size={size} />
  ),

  prisma: ({ color, size = 32 }) => <SiPrisma color={color} size={size} />,
  trpc: ({ size = 32 }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
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

  supabase: ({ size = 32 }) => <SiSupabase color="#0cd45b" size={size} />,
  postgreSQL: ({ size = 32 }) => (
    <BiLogoPostgresql color="#008bb9" size={size} />
  ),
};

export const technologies = [
  {
    name: "TypeScript",
    Icon: () => <Icons.typescript />,
  },
  {
    name: "Next.js",
    Icon: () => <Icons.next />,
  },
  {
    name: "React.js",
    Icon: () => <Icons.react />,
  },
  {
    name: "Redux",
    Icon: () => <Icons.redux />,
  },
  {
    name: "Node.js",
    Icon: () => <Icons.node />,
  },
  {
    name: "Express.js",
    Icon: () => <Icons.express />,
  },
  {
    name: "Prisma",
    Icon: () => <Icons.prisma size={24} />,
  },
  {
    name: "TRPC",
    Icon: () => <Icons.trpc size={26} />,
  },
  {
    name: "Tailwind CSS",
    Icon: () => <Icons.tailwind />,
  },
  {
    name: "MongoDB",
    Icon: () => <Icons.mongoDB />,
  },
  {
    name: "PostgreSQL",
    Icon: () => <Icons.postgreSQL />,
  },
];

export const projects = [
  {
    id: 1,
    name: "Fx Research",
    subTitle: "Forex Market Research Tool",
    description: [
      "At Fx Research, we are revolutionizing the way traders navigate the complexities of the foreign exchange market. As a cutting-edge forex analysis research web app, we empower traders of all levels with the tools and insights they need to make informed decisions and achieve their financial goals",
    ],
    techStack: [
      <Icons.typescript size={28} key={0} />,
      <Icons.next size={28} key={1} />,
      <Icons.trpc size={26} key={2} />,
      <Icons.prisma size={26} key={3} />,
      <Icons.supabase size={26} key={4} />,
    ],
    gallery: [
      "/fxresearch-1.png",
      "/fxresearch-2.png",
      "/fxresearch-3.png",
      "/fxresearch-4.png",
      "/fxresearch-5.png",
    ],
    livePath: "https://fx-research.vercel.app/",
    githubPath: null,
  },
  {
    id: 2,
    name: "AudioPhile",
    subTitle: "Audio Hardware E-commerce ",
    description: [
      "View the optimal layout for the app depending on their device's screen size",
      "Create , Update user preferences & rders",
      "Adding , Upadting & Deleting products from cart",
      "Product description, features & gallery",
    ],
    techStack: [
      <Icons.typescript size={28} key={0} />,
      <Icons.react size={28} key={1} />,
      <Icons.node size={28} key={2} />,
      <Icons.express size={28} key={3} />,
      <Icons.mongoDB size={28} key={4} />,
      <Icons.tailwind size={28} key={5} />,
    ],
    gallery: [
      "/audiophile-1.png",
      "/audiophile-2.png",
      "/audiophile-3.png",
      "/audiophile-4.png",
      "/audiophile-5.png",
      "/audiophile-6.png",
    ],
    livePath: "https://radiant-marigold-3c2557.netlify.app/",
    githubPath: "https://github.com/AshrafElshaer/e-commerce-client",
  },
  {
    id: 3,
    name: "Invoice X",
    subTitle: "Invoicing web app ",
    description: [
      "Create, read, update, and delete invoices",
      "Save draft invoices, and mark pending invoices as paid",
      "Filter invoices by status (draft/pending/paid)",
      "Full authantication through firebase authantication",
    ],
    techStack: [
      <Icons.react size={28} key={1} />,
      <Icons.redux size={28} key={2} />,
      <Icons.firebase size={28} key={3} />,
    ],
    gallery: [
      "/invoice-1.png",
      "/invoice-2.png",
      "/invoice-3.png",
      "/invoice-4.png",
      "/invoice-5.png",
    ],
    livePath: "https://curious-meringue-78ffd1.netlify.app/",
    githubPath: "https://github.com/AshrafElshaer/invoice-app-redux",
  },
];



export const education = [
  {
    id: 1,
    school: "ZTM Academy",
    degree: "Node & Express Js",
    duration: "2021 - 2023",
  },
  {
    id: 2,
    school: "ZTM Academy",
    degree: "React , Redux & Typescript ",
    duration: "2021 - 2023",
  },
  {
    id: 3,
    school: "Epic Flight Academy",
    degree: "Instrument Pilot License",
    duration: "2016 - 2018",
  },
];
