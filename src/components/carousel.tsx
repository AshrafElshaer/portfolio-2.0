"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { Button } from "./ui/button";

type Props = {
  gallery: string[];
  name: string;
};

function Carousel({ gallery, name }: Props) {
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  function handlePrevious() {
    setCurrentIdx((curr) => (curr === 0 ? curr : curr - 1));
  }
  function handleNext() {
    setCurrentIdx((curr) => (curr !== gallery.length - 1 ? curr + 1 : curr));
  }
  return (
    <div className="relative flex h-full w-full overflow-hidden">
      {gallery.map((img, idx) => (
        <Image
          key={idx}
          src={img}
          alt={name}
          className={`absolute left-0 top-0 h-full w-full rounded-lg transition-transform duration-300  ${
            idx !== currentIdx ? "translate-x-full" : ""
          } `}
          fill
          sizes="100%"
          placeholder="blur"
          blurDataURL={img}
        />
      ))}
      <Button
        variant="outline"
        size="icon"
        className="absolute right-1 top-1/2 z-20 -translate-y-1/2 rounded-full"
        onClick={handleNext}
      >
        <FaGreaterThan size={12} />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-1 top-1/2 z-20 -translate-y-1/2 rounded-full"
        onClick={handlePrevious}
      >
        <FaLessThan size={12} />
      </Button>
    </div>
  );
}

export default Carousel;
