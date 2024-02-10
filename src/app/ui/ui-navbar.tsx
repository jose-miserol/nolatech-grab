"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-row justify-between px-4 py-4 lg:px-8 lg:py-8">
      <div className="flex">
        <a href="/#" className="w-40">
          <img alt="Grab" src="/logotype.png" className="w-40" />
        </a>
      </div>
      <ul className="hidden lg:flex lg:items-center lg:justify-between">
        <li>
          <a
            href="/#"
            aria-label="Lorem Ipsum"
            title="Lorem Ipsum"
            className="px-4 font-semibold uppercase tracking-wide text-gray-100 transition-colors duration-200 hover:text-white"
          >
            Lorem Ipsum
          </a>
        </li>
        <li>
          <a
            href="/#"
            aria-label="Lorem Ipsum"
            title="Lorem Ipsum"
            className="px-4 font-semibold uppercase tracking-wide text-gray-100 transition-colors duration-200 hover:text-white"
          >
            Lorem Ipsum
          </a>
        </li>
        <li>
          <a
            href="/#"
            aria-label="Lorem Ipsum"
            title="Lorem Ipsum"
            className="px-4 font-semibold uppercase tracking-wide text-gray-100 transition-colors duration-200 hover:text-white"
          >
            Lorem Ipsum
          </a>
        </li>
        <li>
          <a
            href="/#"
            aria-label="Lorem Ipsum"
            title="Lorem Ipsum"
            className="px-4 font-semibold uppercase tracking-wide text-gray-100 transition-colors duration-200 hover:text-white"
          >
            Lorem Ipsum
          </a>
        </li>
        <li>
          <a
            href="/#"
            aria-label="Lorem Ipsum"
            title="Lorem Ipsum"
            className="px-4 font-semibold uppercase tracking-wide text-gray-100 transition-colors duration-200 hover:text-white"
          >
            Lorem Ipsum
          </a>
        </li>
      </ul>
      <div className="flex lg:hidden">
        <button
          aria-label="Open Menu"
          title="Open Menu"
          className="focus:shadow-outline -mr-1 rounded p-2 transition duration-200 hover:bg-white focus:bg-white focus:outline-none"
          onClick={() => setIsMenuOpen(true)}
        >
          <svg className="w-5 text-gray-900" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
            />
            <path
              fill="currentColor"
              d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
            />
            <path
              fill="currentColor"
              d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
            />
          </svg>
        </button>
        {isMenuOpen && (
          <div className="absolute left-0 top-0 w-full">
            <div className="rounded border bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <a href="/#" className="w-40">
                    <img alt="Grab" src="/logotype.png" className="w-40" />
                  </a>
                </div>
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    className="focus:shadow-outline -mr-2 -mt-2 rounded p-2 transition duration-200 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="w-5 text-gray-700" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <nav>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="/#"
                      aria-label="Lorem Ipsum"
                      title="Lorem Ipsum"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-gray-400"
                    >
                      Lorem Ipsum
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#"
                      aria-label="Lorem Ipsum"
                      title="Lorem Ipsum"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-gray-400"
                    >
                      Lorem Ipsum
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#"
                      aria-label="Lorem Ipsum"
                      title="Lorem Ipsum"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-gray-400"
                    >
                      Lorem Ipsum
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#"
                      aria-label="Lorem Ipsum"
                      title="Lorem Ipsum"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-gray-400"
                    >
                      Lorem Ipsum
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
