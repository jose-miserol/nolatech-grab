"use client";

import Image from "next/image";

export default function Videos() {
  return (
    <div className="w-full">
      <div className="mx-auto px-4 py-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8 lg:py-8">
        <div className="flex flex-col content-center items-center justify-between">
          <div className="mx-auto w-full text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 lg:text-6xl">
              Lorem ipsum
            </h2>
          </div>
          <div className="grid grid-cols-1 py-8 md:grid-cols-3 md:gap-16">
            <a href="/#" aria-label="View">
              <div className="relative overflow-hidden">
                <img
                  className="h-56 w-full object-cover md:h-64 xl:h-80"
                  src="/picture-video-1.png"
                  alt="Picture Video"
                />
                <div className="pb-8 pt-4 text-gray-900">
                  <p className="text-left text-base font-medium tracking-wide text-gray-900">
                    Lorem ipsum dolor sit amet, consetetur
                  </p>
                </div>
              </div>
            </a>
            <a href="/#" aria-label="View">
              <div className="relative overflow-hidden">
                <img
                  className="h-56 w-full object-cover md:h-64 xl:h-80"
                  src="/picture-video-2.png"
                  alt="Picture Video"
                />
                <div className="pb-8 pt-4 text-gray-900">
                  <p className="text-left text-base font-medium tracking-wide text-gray-900">
                    Lorem ipsum dolor sit amet, consetetur
                  </p>
                </div>
              </div>
            </a>
            <a href="/#" aria-label="View">
              <div className="relative overflow-hidden">
                <img
                  className="h-56 w-full object-cover md:h-64 xl:h-80"
                  src="/picture-video-3.png"
                  alt="Picture Video"
                />
                <div className="pb-8 pt-4 text-gray-900">
                  <p className="text-left text-base font-medium tracking-wide text-gray-900">
                    Lorem ipsum dolor sit amet, consetetur
                  </p>
                </div>
              </div>
            </a>
            <a href="/#" aria-label="View">
              <div className="relative overflow-hidden">
                <img
                  className="h-56 w-full object-cover md:h-64 xl:h-80"
                  src="/picture-video-4.png"
                  alt="Picture Video"
                />
                <div className="pb-8 pt-4 text-gray-900">
                  <p className="text-left text-base font-medium tracking-wide text-gray-900">
                    Lorem ipsum dolor sit amet, consetetur
                  </p>
                </div>
              </div>
            </a>
            <a href="/#" aria-label="View">
              <div className="relative overflow-hidden">
                <img
                  className="h-56 w-full object-cover md:h-64 xl:h-80"
                  src="/picture-video-5.png"
                  alt="Picture Video"
                />
                <div className="pb-8 pt-4 text-gray-900">
                  <p className="text-left text-base font-medium tracking-wide text-gray-900">
                    Lorem ipsum dolor sit amet, consetetur
                  </p>
                </div>
              </div>
            </a>
            <a href="/#" aria-label="View">
              <div className="relative overflow-hidden">
                <img
                  className="h-56 w-full object-cover md:h-64 xl:h-80"
                  src="/picture-video-6.png"
                  alt="Picture Video"
                />
                <div className="pb-8 pt-4 text-gray-900">
                  <p className="text-left text-base font-medium tracking-wide text-gray-900">
                    Lorem ipsum dolor sit amet, consetetur
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div>
            <button className="bg-brand-light hover:bg-brand-dark focus:bg-brand-dark focus:shadow-outline items-center justify-center rounded px-12 py-4 font-semibold uppercase tracking-wide text-white shadow-md transition duration-200 focus:outline-none">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
