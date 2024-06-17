import React from "react";
import { Link, useNavigate } from "react-router-dom";
import attach from "../../assets/img/attach.png";

const Header = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };
  return (
    <div 
    className="flex justify-between py-3">
      <div
        onClick={handleHome}
        className="w-full ml-7 justify-center items-center cursor-pointer"
      >
        <img src={attach} width={40} />
      </div>

      <div className="flex w-1/2 justify-center bg-white rounded  gap-2 px-2 mr-7 ">
        <Link
          to="/"
          className="text-black hover:text-gray-700 text-sm font-semibold py-2  px-2 border-r border-gray-300"
        >
          Inicio
        </Link>

        <Link className="text-black hover:text-gray-700 font-semibold text-sm items-center justify-center  py-2  px-2  border-r border-gray-300">
          Contáctenos
        </Link>

        <Link className="text-black hover:text-gray-700 font-semibold text-sm items-center justify-center  py-2  px-2 border-r border-gray-300">
          Contáctenos
        </Link>
        <Link className="text-black hover:text-gray-700 font-semibold text-sm items-center justify-center  py-2  px-2 border-r border-gray-300">
          Ayuda
        </Link>
        <Link className="text-black hover:text-gray-700 font-semibold text-sm items-center  py-2 justify-center ">
          Iniciar session
        </Link>
      </div>
    </div>
  );
};

export default Header;
