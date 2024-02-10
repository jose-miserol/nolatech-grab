"use client";

import Image from "next/image";

export default function Topbar() {
  return (
    <div className="bg-brand-light h-12 w-full">
      <div className="mx-auto h-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <div className="flex h-full flex-row justify-center">
          {/* */}
          <div className="bg-brand-secondary hidden items-center lg:flex lg:flex-row lg:px-8">
            <a
              className="text-xl font-bold uppercase tracking-wide text-white lg:pr-2"
              href="#"
            >
              Live
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304m-7.425 2.121a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </div>
          {/* */}
          <div className="flex h-full flex-row items-center justify-center">
            <a
              className="text-xl font-medium tracking-wide text-white  transition-colors duration-200 lg:px-6"
              href="#"
            >
              Lorem ipsu dolor sit amet...
            </a>
          </div>
          {/* */}
          <div className="bg-brand-dark hidden items-center lg:flex lg:flex-row lg:px-8">
            <a
              className="text-xl font-bold uppercase tracking-wide text-white lg:pr-2"
              href="#"
            >
              Join Now!
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
              />
            </svg>
          </div>
          {/* */}
        </div>
      </div>
    </div>
  );
}
