const Hero_Section = () => {
  return (
    <main className=" mt-10 w-[90%] m-auto flex">
      <div className="w-[594px]">
        <p className="w-full">
          <h1 className="text-[100px] text-black font-bold leading-none w-full ">
            YOUR FEET DESERVE THE BEST
          </h1>
        </p>
        <p className="font-medium mt-5 w-[53%] ml-2 ">
          OUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <p className="mt-6 w-[14rem]">
          <button className="text-white bg-red-600 p-1 rounded-md ml-5">
            Shop Now
          </button>
          <button className="text-black bg-gray-200 p-1 rounded-md ml-6">
            Category
          </button>
        </p>
        <p className="text-gray-500 mt-5 ml-5 inline-block ">
          Also Available on
        </p>
        <div className="flex mt-4 ml-5 w-[10rem] ">
          <img src="./Images/flipkart.png" alt="flipkart" />
          <img className="ml-6" src="./Images/amazon.png" alt="amazon" />
        </div>
      </div>
      <div className="mt-20">
        <img className="h-[34rem]" src="./Images/shoe_image.png" alt="" />
      </div>
    </main>
  );
};

export default Hero_Section;
