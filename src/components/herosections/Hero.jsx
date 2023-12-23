const Hero = () => {
  return (
    <section className="text-white body-font h-[50vh] mt-20 flex justify-center items-center bg-violet-900">
      <div className="container mx-auto flex px-5  items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            React Js Compnents
          </h1>
          <p className="mb-8 leading-relaxed">
            Welcome to the world of Tailblocks! Build stunning websites with
            ease using our collection of React & Tailwind CSS components.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-violet-900 bg-white border-0 py-2 px-6 focus:outline-none hover:bg-slate-200 rounded text-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
