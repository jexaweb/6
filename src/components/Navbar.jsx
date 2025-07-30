import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className="navbar flex justify-between mb-10  sm:flex-col md:flex-row lg:flex">
        <div className="loog">
          {/* <img className=" w50 h25" src="./img/logo_coupang_w350.png" alt="" /> */}
          <div className="text-7xl font-bold mb-1">
            <span className="text-[#5C1D1D]">c</span>
            <span className="text-[#5C1D1D]">o</span>
            <span className="text-[#E53935]">u</span>
            <span className="text-[#FBC02D]">p</span>
            <span className="text-[#8BC34A]">a</span>
            <span className="text-[#4FC3F7]">n</span>
            <span className="text-[#4FC3F7]">g</span>
          </div>
        </div>
        <div className="navbar--conter  ml-90">
          <ul className="flex  gap-10">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-soft mr-5">
            <a href="https://6-dars-woad-six.vercel.app/">
              {" "}
              <i className="fa-regular fa-user text-2xl"></i>
            </a>
          </button>
          <NavLink to="/shop">
            <button className="btn btn-soft " id="shop">
              <i className="fa-solid fa-cart-shopping text-2xl"></i>
            </button>
          </NavLink>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
