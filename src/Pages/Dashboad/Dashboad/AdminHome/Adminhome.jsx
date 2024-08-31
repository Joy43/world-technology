import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";

import useAxiosPublic from "../../../../Hooks/Axiospublic";
import { FaBook, FaDollarSign, FaUsers } from "react-icons/fa";
const Adminhome = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  //  ----------data load --------------------

  const { data: adminStats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      try {
        const res = await axiosPublic.get("/admin-stats");
        return res.data;
      } catch (error) {
        throw new Error("Error fetching admin stats");
      }
    },
  });

  const { data: orderStats = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosPublic.get("/order-stats");
      return res.data;
    },
  });

  // console.log(adminStats.length);
  return (
    <div className="">
      <div>{user?.displayName ? user.displayName : "Back"}</div>
      {/* -------------------stat------------------- */}
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaDollarSign className="text-3xl"></FaDollarSign>
          </div>
          <div className="stat-title">Revenue</div>
          <div className="stat-value">${adminStats.revenue}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-3xl"></FaUsers>
          </div>
          <div className="stat-title">Users</div>
          <div className="stat-value">{adminStats.users}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaBook className="text-3xl"></FaBook>
          </div>
          <div className="stat-title">Menu Items</div>
          <div className="stat-value">{adminStats.menuItems}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value">{orderStats.orders}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default Adminhome;
