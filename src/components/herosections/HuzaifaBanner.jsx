import bannerbg from "../../assets/banner-bg.jpeg";
import worldmap from "../../assets/worldmap.png";
import spaceman from "../../assets/spaceman.png";

const HuzaifaBanner = () => {
  return (
    <div
      className="flex bg-cover bg-center  overflow-hidden h-64 md:h-96 mt-4 justify-start sm:items-center sm:justify-center"
      style={{
        backgroundImage: `url(${bannerbg})`,
      }}
    >
      <div className="relative w-full h-32 md:h-96 flex flex-col justify-center items-center">
        <div className="absolute left-0 bottom-0 ">
          <img src={worldmap} alt="" className="md:w-[80%] lg:w-[80%] w-32" />
        </div>
        <div className="text-center  ">
          <h1 className="text-lg md:text-4xl lg:text-5xl font-bold mb-0 mr-2 s:mt">
            Have an idea?
          </h1>
          <p className="text-sm md:text-xl mb-2">Let's talk about it.</p>
          <button className=" bg-green-950 text-white sm:py-4 py-1 sm:px-12 px-4 font-bold text-lg rounded-full hover:bg-green-900 focus:outline-none focus:shadow-outline-blue">
            Contact
          </button>
        </div>
        <div className="absolute right-0 bottom-0 ">
          <img
            src={spaceman}
            alt=""
            className="fluid object-cover md:w-[100%] lg:w-[100%] w-32"
          />
        </div>
      </div>
    </div>
  );
};

export default HuzaifaBanner;
