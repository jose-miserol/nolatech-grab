"use client";

export default function Blog() {
  return (
    <div className="w-full bg-gray-100">
      <div className="mx-auto h-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <div className="flex flex-col justify-between px-4 py-4 lg:px-8 lg:py-8">
          <div className="mx-auto w-full pt-8 text-center lg:w-6/12">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 lg:text-6xl">
              Lorem ipsum
            </h2>
            <p className="pt-4 text-base lg:py-8 lg:text-xl">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
          <div className="grid grid-cols-1 py-4 md:grid-cols-3 md:gap-8 lg:py-8">
            <a href="/#" aria-label="View">
              <div className="relative transform overflow-hidden pt-4 shadow-lg transition duration-200 hover:-translate-y-2 hover:shadow-2xl lg:pt-0">
                <img
                  className="h-56 w-full object-cover md:h-64 xl:h-80"
                  src="/picture-2.png"
                  alt="srcE"
                />
                <div className="bg-brand-light absolute inset-x-0 bottom-0 px-6 py-4 text-white">
                  <p className="text-center text-base font-medium uppercase tracking-wide text-white">
                    Lorem ipsum
                  </p>
                </div>
              </div>
            </a>
            <a href="/#" aria-label="View">
              <div className="relative transform overflow-hidden pt-4 shadow-lg transition duration-200 hover:-translate-y-2 hover:shadow-2xl lg:pt-0">
                <img
                  className="h-56 w-full object-cover md:h-64 xl:h-80"
                  src="/picture-3.png"
                  alt="srcE"
                />
                <div className="bg-brand-light absolute inset-x-0 bottom-0 px-6 py-4 text-white">
                  <p className="text-center text-base font-medium uppercase tracking-wide text-white">
                    Lorem ipsum
                  </p>
                </div>
              </div>
            </a>
            <a href="/#" aria-label="View">
              <div className="relative transform overflow-hidden pt-4 shadow-lg transition duration-200 hover:-translate-y-2 hover:shadow-2xl lg:pt-0">
                <img
                  className="h-56 w-full object-cover md:h-64 xl:h-80"
                  src="/picture-4.png"
                  alt="srcE"
                />
                <div className="bg-brand-light absolute inset-x-0 bottom-0 px-6 py-4 text-white">
                  <p className="text-center text-base font-medium uppercase tracking-wide text-white">
                    Lorem ipsum
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="pt-8 text-center">
            <a href="/#">
              <button className="hover:bg-brand-dark items-center justify-center rounded  border border-gray-900 px-12 py-4 font-bold uppercase tracking-wide shadow-md  ">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
