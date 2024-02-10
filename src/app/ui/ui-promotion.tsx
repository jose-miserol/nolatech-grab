"use client";

export default function Promotion() {
  return (
    <div className="bg-brand-dark w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        {/**/}
        <div className="bg-brand-dark px-4 py-4 lg:px-8 lg:py-8">
          <div className="mx-auto w-10/12 ">
            <div className="py-4 lg:pt-8"></div>
            <h2 className="text-center text-4xl font-bold text-white md:text-6xl lg:text-left ">
              Lorem ipsum dolor sit amet, consetetur
            </h2>
            <div className="py-4 text-center lg:text-left">
              <div className="py-2">
                <button className="focus:shadow-outline items-center justify-center rounded bg-white px-12 py-4 font-bold uppercase tracking-wide text-gray-900 shadow-md transition duration-200 focus:outline-none">
                  Lorem ipsum dolor sit
                </button>
              </div>
              <div className="py-2">
                <button className="focus:shadow-outline items-center justify-center rounded border border-white bg-transparent px-12 py-4 font-bold uppercase tracking-wide text-white shadow-md transition duration-200 focus:outline-none">
                  Lorem ipsum dolor sit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-brand-promotion">
          <img
            src="/picture-5.png"
            alt="About"
            className="h-auto w-full object-cover shadow-lg lg:w-4/5 lg:rounded-none lg:shadow-none"
          />
        </div>
      </div>
    </div>
  );
}
