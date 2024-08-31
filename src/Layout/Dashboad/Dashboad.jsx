import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaPaypal,
  FaSearch,
  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  return (
    <div className="flex min-h-screen">
      {/*---------------- Dashboard Sidebar ------------ */}
      <div className="w-64 bg-purple-900 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold">Dashboard</div>
        <ul className="menu p-4 flex-1 space-y-4 text-white">
          {isAdmin ? (
            <>
              <li className="shadow-lg shadow-slate-300">
                <NavLink
                  to="/dashboard/adminHome"
                  className="flex items-center text-white space-x-2 hover:bg-purple-800 p-2 rounded"
                >
                  <FaHome />
                  <span className="flex items-center space-x-2 text-white hover:bg-purple-800 p-2 rounded">Admin Home</span>
                </NavLink>
              </li>
              <li className="shadow-lg shadow-slate-300">
                <NavLink
                  to="/dashboard/addItems"
                  className="flex items-center space-x-2 text-white hover:bg-purple-800 p-2 rounded"
                >
                  <MdAddShoppingCart />
                  <span>Add Items</span>
                </NavLink>
              </li>
              <li className="shadow-lg shadow-slate-300 text-white">
                <NavLink
                  to="/dashboard/manageProduct"
                  className="flex items-center space-x-2 hover:bg-purple-800 p-2 rounded"
                >
                  <FaList />
                  <span className="flex items-center space-x-2 text-white hover:bg-purple-800 p-2 rounded">Manage Items</span>
                </NavLink>
              </li>
              <li className="shadow-lg shadow-slate-300 text-white">
                <NavLink
                  to="/dashboard/users"
                  className="flex items-center space-x-2 hover:bg-purple-800 p-2 rounded"
                >
                  <FaUsers />
                  <span>Manage Users</span>
                </NavLink>
              </li>
            </>
          ) : (
            <>
              {/* --------------- User ----------------- */}
              <li className="shadow-lg shadow-slate-300 text-white">
                <NavLink
                  to="/dashboard/userHome"
                  className="flex items-center space-x-2 hover:bg-purple-800 p-2 rounded"
                >
                  <FaHome />
                  <span>User Home</span>
                </NavLink>
              </li>
              <li className="shadow-lg shadow-slate-300 text-white">
                <NavLink
                  to="/dashboard/cart"
                  className="flex items-center space-x-2 hover:bg-purple-800 p-2 rounded"
                >
                  <FaShoppingCart />
                  <span>My Cart ({cart.length})</span>
                </NavLink>
              </li>
              <li className="shadow-lg shadow-slate-300 text-white">
                <NavLink
                  to="/dashboard/review"
                  className="flex items-center space-x-2 hover:bg-purple-800 p-2 rounded"
                >
                  <FaAd />
                  <span>Add a Review</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/payment"
                  className="flex items-center space-x-2 hover:bg-purple-800 p-2 text-white rounded"
                >
                  <FaPaypal />
                  <span>Payment</span>
                </NavLink>
              </li>
            </>
          )}
          {/* ------------ Shared Nav Links ---------------- */}
          <div className="divider border-t border-purple-700 my-4"></div>
          <li>
            <NavLink
              to="/"
              className="flex items-center space-x-2 hover:bg-purple-800 p-2 rounded"
            >
              <FaHome />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product"
              className="flex items-center space-x-2 hover:bg-purple-800 p-2 rounded"
            >
              <FaSearch />
              <span>Product</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="flex items-center space-x-2 hover:bg-purple-800 p-2 rounded"
            >
              <FaEnvelope />
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
        <div className="p-4 text-center border-t border-purple-700">
          © 2024 World Technology
        </div>
      </div>
      {/*------------- Dashboard Content ------------------*/}
      <div className="flex-1 p-8 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
