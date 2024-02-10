"use client";

import Image from "next/image";

export default function Stats() {
  return (
    <div className="bg-brand-tertiary w-full">
      <div className="mx-auto px-4 py-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8 lg:py-8">
        <div className="flex flex-col content-center items-center justify-between lg:flex-row">
          <div className="grid grid-cols-2 py-8 lg:grid-cols-6 lg:py-0">
            {/**/}
            <div className="col-span-2 grid items-center border-white text-left">
              <p className="text-xl font-bold uppercase tracking-widest text-white">
                Lorem ipsum dolor sit amet, consetetur
              </p>
            </div>
            <div className="col-span-1 grid items-center border-white text-center lg:border-r">
              <div className="py-4 lg:hidden"></div>
              <h6 className="text-xl font-bold text-white lg:text-6xl">170</h6>
              <p className="pt-2 text-base font-medium uppercase tracking-widest text-green-500">
                Days
              </p>
            </div>
            <div className="col-span-1 grid items-center border-white text-center lg:border-r">
              <div className="py-4 lg:hidden"></div>
              <h6 className="text-xl font-bold text-white lg:text-6xl">13</h6>
              <p className="pt-2 text-base font-medium uppercase tracking-widest text-green-500">
                Hours
              </p>
            </div>
            <div className="col-span-1 grid items-center border-white text-center lg:border-r">
              <div className="py-4 lg:hidden"></div>
              <h6 className="text-xl font-bold text-white lg:text-6xl">39</h6>
              <p className="pt-2 text-base font-medium uppercase tracking-widest text-green-500">
                Minutes
              </p>
            </div>
            <div className="col-span-1 grid items-center border-white text-center">
              <div className="py-4 lg:hidden"></div>
              <h6 className="text-xl font-bold text-white lg:text-6xl">29</h6>
              <p className="pt-2 text-base font-medium uppercase tracking-widest text-green-500">
                Seconds
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
