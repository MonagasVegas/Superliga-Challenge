import React from "react";
import { useNavigate } from "react-router-dom";

const Modal = ({ title, subtitle }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/file-added");
  };

  return (
    <div className="flex w-full justify-center mt-28 ">
      <div className="py-5 px-5 flex flex-col justify-center w-1/3 rounded-lg bg-white ">
        <div className=" flex flex-col  justify-center items-center mt-12  ">
          <h1 className="text-black font-bold text-2xl ">{title}</h1>
          <span className="text-black font-semibold text-lg ">{subtitle}</span>
        </div>

        <div className="flex h-40 items-end justify-center">
          <button
            onClick={handleGoBack}
            className="py-2 w-1/2 font-semibold rounded-full bg-primary text-black hover:text-white"
            type="submit"
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
