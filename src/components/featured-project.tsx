"use client";

import { Card, CardContent, CardHeader } from "./ui/card";
import { projects } from "@/data";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Carousel from "./carousel";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { FaCode, FaEye } from "react-icons/fa";

function FeaturedProjects() {
  return (
    <Card className="col-span-2 row-span-2 flex min-h-[50px] flex-col  ">
      <CardHeader>
        <h3 className="">featured projects</h3>
      </CardHeader>
      <CardContent className="flex-1 p-0">
        {projects.map((project) => (
          <Dialog key={project.id}>
            <DialogTrigger className="glassHover relative flex w-full cursor-pointer items-center justify-between px-4 py-2 hover:bg-background/50">
              <h4 className="text-sm">{project.name}</h4>
              <span className="text-xs text-secondary-foreground/80">
                {project.subTitle}
              </span>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{project.name}</DialogTitle>
                <DialogDescription>{project.subTitle}</DialogDescription>
              </DialogHeader>
              <div className="flex h-[28rem] flex-col  gap-4  ">
                <div className="h-1/2 w-full ">
                  <Carousel gallery={project.gallery} name={project.name} />
                </div>
                <div className="w-full">
                  <h4 className="my-2 text-sm font-semibold">Description</h4>
                  <p className="text-xs">{project.description}</p>
                  <h4 className="my-2 text-sm font-semibold">Technologies</h4>
                  <ul className="flex gap-2 text-xs">
                    {project.techStack.map((tech, idx) => (
                      <li key={idx}>{tech}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex w-full flex-col gap-2 sm:flex-row">
                  <Link
                    href={project.livePath}
                    target="_blank"
                    className={buttonVariants({
                      variant: "glassy",
                      className: "w-full gap-2",
                    })}
                  >
                    <FaEye />
                    Demo
                  </Link>
                  <Link
                    href={project.githubPath}
                    target="_blank"
                    className={buttonVariants({
                      variant: "glassy",
                      className: "w-full gap-2",
                    })}
                  >
                    <FaCode /> Code
                  </Link>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </CardContent>
    </Card>
  );
}

export default FeaturedProjects;
