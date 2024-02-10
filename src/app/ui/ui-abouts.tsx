"use client";

import Image from "next/image";

export default function Abouts() {
  return (
    <div className="w-full">
      <div className="mx-auto h-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <div className="flex flex-col justify-between px-4 py-4 lg:flex-row lg:px-8 lg:py-8">
          <div className="w-12/12 lg:w-5/12">
            <div className="py-4 lg:pt-8"></div>
            <h2 className="text-center text-xl font-bold leading-none tracking-tight text-gray-950 lg:pr-8 lg:text-left lg:text-6xl">
              Lorem ipsum dolor sit amet
            </h2>
            <div className="py-4 lg:pt-8"></div>
            <p className="text-base lg:pr-8 lg:text-xl">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit.
            </p>
            <div className="py-4 lg:pt-8"></div>
          </div>
          <div className="w-1/12"></div>
          <div className="w-12/12 lg:w-6/12">
            <div className="py-4 lg:pt-8"></div>
            <div className="w-full">
              <img src="/picture-1.png" alt="About" className="h-auto w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
