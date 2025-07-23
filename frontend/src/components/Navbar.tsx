const Navbar = () => {
  return (
    <div className="w-full h-[10vh] bg-[#050c16]">
      <div className="w-full h-full flex items-center justify-end text-slate-200 pr-[5vw] gap-x-6">
        <button className="hover:text-white hover:text-2xl transition-all duration-300 ease-in-out ">
          Products
        </button>
        <button className="hover:text-white hover:text-2xl transition-all duration-300 ease-in-out">
          Docs
        </button>
        <button className="hover:text-white hover:text-2xl transition-all duration-300 ease-in-out">
          Community
        </button>
        <button className="hover:text-white hover:text-2xl transition-all duration-300 ease-in-out">
          Pricing
        </button>
        <button className="hover:text-white  hover:text-2xl transition-all duration-300 ease-in-out">
          About Us
        </button>
        <button className="bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600 transition duration-300">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
