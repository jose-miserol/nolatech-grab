"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full bg-white">
      {/* */}
      <div className="mx-auto px-4 py-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 py-4 md:grid-cols-3">
          <div className="flex items-center justify-center md:justify-start">
            <p className="py-4 text-center text-base font-medium text-gray-900 md:py-0 md:text-left">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna
            </p>
          </div>
          <div className="flex items-center justify-center py-4 md:py-0">
            <img alt="Grab" src="/logotype.png" className="h-auto w-40" />
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <p className="py-4 text-center text-base font-semibold text-gray-900 md:py-0 md:text-right">
              All rights reserved to
              <br className="hidden md:inline-block" />
              Lorem Ipsum© 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
