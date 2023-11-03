const Hero_Section = () => {
  return (
    <main className=" mt-10 w-[90%] m-auto flex">
      {/* -----------------------Info. of brand------------------- */}
      <div className="w-[594px]">
        <p className="">
          <h1 className="text-[97px] text-black font-semibold leading-none w-full tracking-tighter">
            YOUR FEET DESERVE THE BEST
          </h1>
        </p>
        <p className="font-medium mt-3 w-[75%] ml-2 leading-tight">
          OUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <p className="mt-3 w-[14rem]">
          <button className="text-white bg-red-600 p-1 rounded-md ml-5">
            Shop Now
          </button>
          <button className="text-black bg-gray-200 p-1 rounded-md ml-6">
            Category
          </button>
        </p>
        <p className="text-gray-500 mt-2 ml-5 inline-block ">
          Also Available on
        </p>
        <div className="flex mt-2 ml-5 w-[10rem] ">
          <img src="./Images/flipkart.png" alt="flipkart" />
          <img className="ml-6" src="./Images/amazon.png" alt="amazon" />
        </div>
      </div>

      {/* --------------------Image of Brand----------------------- */}
      <div className="mt-20 mb-20">
        <img
          className="h-[30rem] w-full"
          src="./Images/shoe_image.png"
          alt=""
        />
      </div>
    </main>
  );
};

export default Hero_Section;
