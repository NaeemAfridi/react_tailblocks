import React from "react";

const About1 = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-100 mt-4">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              About Us
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Tailblocks is a collection of ready-to-use, responsive components
            built with Tailwind CSS. Our goal is to make web development faster
            and easier for developers by providing a set of customizable and
            reusable UI components. Feel free to explore and use these blocks to
            create beautiful websites effortlessly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About1;
