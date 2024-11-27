import React from "react";

const NewRefer = (props) => {
  return (
    <div>
      <section className="overflow-hidden bg-gray-50 sm:grid border-gray-200 border rounded-lg sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center sm:text-left">
            <h2 className="sm:text-4xl text-2xl font-bold text-blue-500  ">
              {props.heading}
            </h2>

            <p className="  sm:text-4xl text-xl  text-gray-900 md:mt-4 md:block">
              {props.subhead}
            </p>
            <p className="  sm:text-6xl  text-4xl text-gray-900 md:mt-4 md:block">
              {props.price}
            </p>
            <p className="  sm:text-2xl text-xl  text-gray-900 md:mt-4 md:block">
              {props.tag}
            </p>
            <div className="mt-4 md:mt-6">
              <div
                onClick={props.onClick}
                className="inline-block cursor-pointer rounded bg-blue-600 px-16 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-white"
              >
                {props.btntxt}
              </div>
            </div>
            <p className="  sm:text-xl text-base  text-green-600 mt-2 md:mt-4 md:block">
              {props.txt}
            </p>
          </div>
        </div>

        <img
          alt="Student"
          height={"full"}
          width={"full"}
          src={"/referr.webp"}
          className="h-56 w-full object-cover sm:h-full"
        />
      </section>
    </div>
  );
};

export default NewRefer;
