"use client";

export default function News() {
  return (
    <div className="bg-brand-tertiary w-full">
      <div className="mx-auto h-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <div className="flex flex-col justify-between px-4 py-4 lg:px-8 lg:py-8">
          <div className="mx-auto w-full pt-8 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
              Lorem ipsum dolor sit amet
            </h2>
          </div>
          <div className="grid grid-cols-1 py-4 md:grid-cols-3 md:gap-8 lg:py-8">
            <a href="/#" aria-label="View">
              <div className="relative transform overflow-hidden pt-4 shadow-lg transition duration-200 hover:-translate-y-2 hover:shadow-2xl lg:pt-0"></div>
              <img
                className="h w-full object-cover"
                src="picture-8.png"
                alt=""
              />
            </a>
            <a href="/#" aria-label="View">
              <div className="relative transform overflow-hidden pt-4 shadow-lg transition duration-200 hover:-translate-y-2 hover:shadow-2xl lg:pt-0">
                <img
                  className="w-full object-cover"
                  src="picture-9.png"
                  alt=""
                />
              </div>
            </a>
            <a href="/#" aria-label="View">
              <div className="relative transform overflow-hidden pt-4 shadow-lg transition duration-200 hover:-translate-y-2 hover:shadow-2xl lg:pt-0">
                <img
                  className="w-full object-cover"
                  src="picture-10.png"
                  alt=""
                />
              </div>
            </a>
          </div>
          <div className="pt-8 text-center">
            <a href="/#">
              <button className="focus:shadow-outline items-center justify-center rounded bg-white px-12 py-4 font-bold uppercase tracking-wide text-gray-900 shadow-md transition duration-200 focus:outline-none">
                VIEW ALL
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
