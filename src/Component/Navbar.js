// const { useState } = require("react");
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [srch, setSrch] = useState("");
  return (
    <div className="flex items-center">
      <ul className="flex">
        <li className="ml-8">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="ml-8">
          <Link to={"/fav"}>Favourites</Link>
        </li>
        <li className="ml-8">
          <Link to={"/watchlist"}>Watchlist</Link>
        </li>
      </ul>
      {/* <input
        className="ml-4 mr-3 bg-red-50 p-2"
        placeholder="Search Movies"
        type="text"
        value={srch}
        onChange={(e) => {
          setSrch(e.target.value);
        }}
      />
      <button className="bg-slate-200 p-2 ">Search</button> */}
    </div>
  );
};

export default Navbar;
