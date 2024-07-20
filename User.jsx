import React from "react";
import { Link,Outlet } from "react-router-dom";

const User = () => {
  return (
    <div className=" w-1/2 m-auto mt-10">
      <h1 className="text-red-400 text-5xl mb-2">user</h1>
      <div className="flex w-1/2 flex-col mt-5">
        <Link
          className="p-3 bg-red-200 text-2xl mb-3 hover:bg-orange-500"
          to="/user/john"
        >
          john
        </Link>  
        <Link
          className="p-3 bg-red-200 text-2xl mb-3 hover:bg-orange-500"
          to="/user/ak"
        >
          ak
        </Link>  <Link
          className="p-3 bg-red-200 text-2xl mb-3 hover:bg-orange-500"
          to="/user/rohit"
        >
          rohit
        </Link>
        <hr />
        <Outlet/>
      </div>
    </div>
  );
};

export default User;
