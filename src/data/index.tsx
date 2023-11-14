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
  firebase: ({ color, size = 32 }) => <SiFirebase color={"#FFCA28 "} size={size} />,
  linkedIn: ({ color, size = 32 }) => (
    <AiFillLinkedin color={color} size={size} />
  ),

  prisma: ({ color, size = 32 }) => <SiPrisma color={color} size={size} />,
  trpc: ({ size = 32 }) => <SiTrpc color="#398ccb" size={size} />,
  supabase: ({  size = 32 }) => <SiSupabase ccolor="#0cd45b" size={size} />,
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
    Icon: () => <Icons.trpc />,
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
    id: 2,
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
  {
    id: 3,
    name: "Chat & Chill",
    subTitle: "Live Web Chat Application ",
    description: [
      "A live chat web app that allows users to chat with each other in real-time",
      "Full authantication through Next-Auth authantication",
      "Users can send images or files in the chat",
      "Users can see who is online",
      "User can add or delete a chat room or friend",
    ],
    techStack: [
      <Icons.next size={28} key={1} />,
      <Icons.trpc size={28} key={0} />,
      <Icons.prisma size={28} key={2} />,
      <Icons.supabase size={28} key={3} />,
    ],
    gallery: ["/chat-1.png", "/chat-2.png", "/chat-3.png"],
    livePath: "https://chat-and-chill.vercel.app/",
    githubPath: "https://github.com/AshrafElshaer/chat-and-chill",
  },
];
