const Navigation = () => {
  return (
    <div>
      <header className="flex justify-between w-[90%] m-auto">
        <div className="ml-9 mt-2">
          <img
            className="w-[76px] h-[42.75px] "
            src="./Images/brand_logo.png"
            alt="logo"
          />
        </div>

        <nav className="w-[23rem] mt-2">
          <ul className="flex justify-between font-semibold ">
            <li>MENU</li>
            <li>LOCATION</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </nav>
        <button className="bg-red-500 text-white p-1 text-lg mt-2  w-[4rem] ">
          Login
        </button>
      </header>
    </div>
  );
};

export default Navigation;
