import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

const SideNavBar = () => {
  const location = useLocation();
  return (
    <div className="h-full w-full bg-gray-400">
      <ul className="flex flex-col">
        <Link to={"/"}>
          <li
            className={`px-7 py-2 ${
              location.pathname === "/" ? "bg-sky-500" : "bg-gray-400"
            }`}
          >
            {" "}
            Income
          </li>
        </Link>

        <Link to={"/expense"}>
          {" "}
          <li
            className={`px-7 py-2 ${
              location.pathname === "/expense" ? "bg-sky-500" : "bg-gray-400"
            }`}
          >
            Expense
          </li>{" "}
        </Link>

        <Link to={"/profit"}>
          {" "}
          <li
            className={`px-7 py-2  ${
              location.pathname === "/profit" ? "bg-sky-500" : "bg-gray-400"
            }`}
          >
            Profit & Loss
          </li>{" "}
        </Link>
      </ul>
    </div>
  );
};

export default SideNavBar;
