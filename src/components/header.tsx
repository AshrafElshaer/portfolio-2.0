import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "./ui/button";
import { RiTwitterXLine } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";

function Header() {
  return (
    <header className=" flex items-center justify-start gap-2 ">
      <div className=" max-w-fit flex gap-2 justify-center items-center">
        <Avatar className="w-12 h-12">
          <AvatarFallback className="text-xl">AE</AvatarFallback>
        </Avatar>
        <div className="w-full">
          <h1 className="text-sm font-semibold ">Ashraf Elshaer</h1>
          <span className="text-sm text-secondary-foreground/80">
            Softwere Engineer
          </span>
        </div>
      </div>
      <Link
        href="https://twitter.com/AshrafElshaer98"
        target="_blank"
        className={buttonVariants({
          variant: "glassy",
          size: "icon",
          className: "ml-auto",
        })}
      >
        <RiTwitterXLine size="1.2rem" />
      </Link>

      <Link
        href="https://github.com/AshrafElshaer"
        target="_blank"
        className={buttonVariants({
          variant: "glassy",
          size: "icon",
        })}
      >
        <AiFillGithub size="1.2rem" />
      </Link>
      <Link
        href="mailto:ashrafelshaer98@icloud.com"
        target="_blank"
        className={buttonVariants({
          variant: "glassy",
          size: "icon",
        })}
      >
        <HiOutlineMail size="1.2rem" />
      </Link>
    </header>
  );
}

export default Header;
