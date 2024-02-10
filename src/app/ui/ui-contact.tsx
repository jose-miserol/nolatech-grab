"use client";

export default function Contact() {
  return (
    <div className="bg-contact w-full">
      <div className="mx-auto h-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <div className="grid grid-cols-1 px-4 py-4 lg:grid-cols-2 lg:px-8 lg:py-8">
          <div></div>
          <div className="mx-auto w-full pt-8 text-left">
            <h2 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
              Lorem ipsum
            </h2>
            <p className="pt-4 text-base text-white lg:py-8 lg:text-xl">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            </p>
            <form className="ml-0 grid w-full grid-cols-1 gap-4 py-4 lg:w-10/12 lg:grid-cols-2 lg:py-6">
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full rounded border-0 bg-gray-300 px-4 py-3 font-medium text-gray-700 placeholder:font-semibold  placeholder:text-gray-600 focus:outline-none focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="surname"
                  id="surname"
                  className="w-full rounded border-0 bg-gray-300 px-4 py-3 font-medium text-gray-700 placeholder:font-semibold  placeholder:text-gray-600 focus:outline-none focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Surname"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="w-full rounded border-0 bg-gray-300 px-4 py-3 font-medium text-gray-700 placeholder:font-semibold  placeholder:text-gray-600 focus:outline-none focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Phone"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full rounded border-0 bg-gray-300 px-4 py-3 font-medium text-gray-700 placeholder:font-semibold  placeholder:text-gray-600 focus:outline-none focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="email"
                />
              </div>
              <div className="col-span-2">
                <input
                  type="text"
                  name="department"
                  id="department"
                  className="w-full rounded border-0 bg-gray-300 px-4 py-3 font-medium text-gray-700 placeholder:font-semibold  placeholder:text-gray-600 focus:outline-none focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Department"
                />
              </div>
              <div className="col-span-2">
                <textarea
                  name="mensaje"
                  id="mensaje"
                  className="w-full rounded border-0 bg-gray-300 px-4 pb-16  pt-4 font-medium text-gray-700  placeholder:font-semibold placeholder:text-gray-600 focus:outline-none focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Mensaje"
                />
              </div>
              <div className="col-span-2">
                <button className="bg-brand-light hover:bg-brand-dark focus:bg-brand-dark focus:shadow-outline items-center justify-center rounded px-16 py-4 font-semibold uppercase tracking-wide text-white shadow-md transition duration-200 focus:outline-none">
                  I’M IN
                </button>
                <p className="pt-4 text-base text-white lg:py-8">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
