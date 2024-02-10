"use client";

import { useState } from "react";
import Navbar from "@/app/ui/ui-navbar";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-header h-screen w-full">
      <div className="mx-auto h-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <Navbar />
        <div className="grid grid-cols-1 px-4 py-4 lg:grid-cols-5 lg:px-8 lg:py-8">
          <div className="col-span-2"></div>
          <div className="col-span-3">
            <div className="py-4">
              <p className="text-left text-4xl font-extrabold uppercase tracking-wide text-white md:text-6xl">
                Lorem Ipsum
              </p>
            </div>
            <div className="py-4">
              <p className="text-dark inline-block bg-white text-left text-4xl font-extrabold uppercase tracking-wide md:text-6xl">
                Lorem Ipsum dolor
              </p>
            </div>
            <div className="py-4">
              <p className="text-left text-4xl font-extrabold uppercase tracking-wide text-white md:text-6xl">
                Lorem Ipsum
              </p>
            </div>
            <div className="pt-8 md:text-left">
              <a href="/#">
                <button className="bg-brand-light hover:bg-brand-dark focus:bg-brand-dark focus:shadow-outline items-center justify-center rounded px-12 py-4 font-semibold uppercase tracking-wide text-white shadow-md transition duration-200 focus:outline-none">
                  What Is Next
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
