import { Link } from "react-router-dom";
import { MdDarkMode, MdOutlineDashboard } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";

import useAuth from "../../../Hooks/useAuth";
import { useState } from "react";
import useCart from "../../../Hooks/usecart";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const [cart] = useCart();
  //    ----------logout------
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  // -----------------     dark mode    ---------------

  const [isDarkMode, setDarkMode] = useState(false);
  const toogleTheame = () => {
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute("data-theme");
    setDarkMode((prevDarMode) => !prevDarMode);
    if (currentTheme === "business") {
      htmlElement.setAttribute("data-theme", "corporate");
    } else {
      htmlElement.setAttribute("data-theme", "business");
    }
  };
  const themeIconSize = "30px";
  // --------------- user dopdown----------

  // ----------navoptions----------
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/product">Products</Link>
      </li>
      <li>
        <Link to="/contact">contact</Link>
      </li>
      <li></li>
    </>
  );

  return (
    <>
      <div className="navbar  bg-black  text-white bg-opacity-30">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-primary lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#ea1d5d] rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            {" "}
            <span className="text-[#ea1d5d] text-3xl font-bold">Tech </span>
            world
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">{navOptions}</ul>
        </div>
        {/* ---------------navbar end---------- */}
        <div className="navbar-end sm:gap-3 lg:gap-8">
          <div>
            <Link className="" to="/dashboard/cart">
              <button className="btn bg-[#c42cbf] ">
                <FaShoppingCart className="mr-2"></FaShoppingCart>
                <div className="badge badge-accent bg-transparent">
                  +{cart.length}
                </div>
              </button>
            </Link>
          </div>
          <div>
            {user ? (
              <div className="dropdown  dropdown-left">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <img
                    className="rounded-full "
                    alt="User Avatar"
                    src={user?.photoURL}
                  />
                </div>

                <div
                  tabIndex={0}
                  className="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-primary text-primary-content"
                >
                  <div className="card-body">
                    <p className="text-lg"> Name:-{user?.displayName}</p>
                    <Link to="/dashboard">
                      <button className="flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80 dark:focus:ring-gray-300">
                        <MdOutlineDashboard className="h-5 w-5" />
                        Dashboard
                      </button>
                    </Link>
                    <button
                      className=" px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-orange-700 outline-none bg-transparent hover:bg-orange-700 text-orange-700 hover:text-white transition-all duration-300"
                      onClick={handleLogOut}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Link to="/login" className="btn btn-ghost">
                Login/Registration
              </Link>
            )}
          </div>

          {/* -------theme --------------*/}
          <div>
            <button className="text-[#FF3811] " onClick={toogleTheame}>
              {isDarkMode ? (
                <MdDarkMode size={themeIconSize} />
              ) : (
                <BsSunFill size={themeIconSize} />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
