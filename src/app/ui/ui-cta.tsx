"use client";

export default function Cta() {
  return (
    <div className="bg-call-to-action flex h-screen w-full items-center bg-gray-100">
      {/* */}
      <div className="grid grid-cols-1 py-4 md:grid-cols-2">
        <div className="mx-auto w-10/12">
          <div className="px-4 py-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8 lg:py-16">
            <h2 className="text-center text-3xl font-bold text-gray-900 md:text-6xl lg:w-10/12 lg:text-left ">
              Lorem ipsum dolor sit
            </h2>
            <p className="py-4 text-center text-base font-medium text-gray-900 lg:w-10/12 lg:py-8 lg:text-left lg:text-xl ">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
            <div className="text-center md:text-left">
              <button className="bg-brand-light hover:bg-brand-dark focus:bg-brand-dark focus:shadow-outline items-center justify-center rounded px-12 py-4 font-semibold uppercase tracking-wide text-white shadow-md transition duration-200 focus:outline-none">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
