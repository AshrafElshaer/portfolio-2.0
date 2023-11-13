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
  | "supabase";

type Options = {
  color?: string;
  size?: string;
};
const Icons: Record<IconName, (props: Options) => ReactNode> = {
  react: ({ color, size }) => <FaReact color={color} size={size} />,
  typescript: ({ color, size }) => <SiTypescript color={color} size={size} />,
  next: ({ color, size }) => <SiNextdotjs color={color} size={size} />,
  redux: ({ color, size }) => <SiRedux color={color} size={size} />,
  tailwind: ({ color, size }) => <SiTailwindcss color={color} size={size} />,
  node: ({ color, size }) => <SiNodedotjs color={color} size={size} />,
  express: ({ color, size }) => <SiExpress color={color} size={size} />,
  mongoDB: ({ color, size }) => <SiMongodb color={color} size={size} />,
  github: ({ color, size }) => <AiFillGithub color={color} size={size} />,
  firebase: ({ color, size }) => <SiFirebase color={color} size={size} />,
  linkedIn: ({ color, size }) => <AiFillLinkedin color={color} size={size} />,

  prisma: ({ color, size }) => <SiPrisma color={color} size={size} />,
  trpc: ({ color, size }) => <SiTrpc color={color} size={size} />,
  supabase: ({ color, size }) => <SiSupabase color={color} size={size} />,
};

export const technologies = [
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
    Icon: () => <SiPrisma size={24} />,
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
      <Icons.typescript size="1.5rem" key={0} />,
      <Icons.react size="1.5rem" key={1} />,
      <Icons.node size="1.5rem" key={2} />,
      <Icons.express size="1.5rem" key={3} />,
      <Icons.mongoDB size="1.5rem" key={4} />,
      <Icons.tailwind size="1.5rem" key={5} />,
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
      <Icons.react size="1.5rem" key={1} />,
      <Icons.redux size="1.5rem" key={2} />,
      <Icons.firebase size="1.5rem" key={3} />,
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
      <Icons.next size="1.5rem" key={1} />,
      <Icons.trpc size="1.5rem" key={0} />,
      <Icons.prisma size="1.5rem" key={2} />,
      <Icons.supabase size="1.5rem" key={3} />,
    ],
    gallery: ["/chat-1.png", "/chat-2.png", "/chat-3.png"],
    livePath: "https://chat-and-chill.vercel.app/",
    githubPath: "https://github.com/AshrafElshaer/chat-and-chill",
  },
];
