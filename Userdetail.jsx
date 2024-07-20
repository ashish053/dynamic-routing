import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Userdetail = () => {
  const { name } = useParams();
  const navigate =useNavigate()

  // const goback=()=>{navigate(-1)}
  const goback=()=>{navigate("/user")}
  return (
    <>
      <div className=" w-1/2 m-auto mt-10">
        <h1 className="text-red-400 text-5xl mb-2"> {name}</h1>
        <button onClick={goback} className="text-white bg-slate-700 mt-5 p-2">
          
          go back
        </button>
      </div>
    </>
  );
};

export default Userdetail;
