import React from "react";
import { useNavigate } from "react-router-dom";

const Modal = ({ title, subtitle, body }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/file-added");
  };

  return (
    <div className="flex w-full justify-center mt-28 ">
      <div className=" px-5 flex flex-col  w-1/3 rounded-lg bg-white">
        <div className=" flex flex-col justify-center items-center mt-12 gap-8">
          <h1 className="text-red-600 font-bold text-3xl">{title}</h1>
          <h1 className="text-black font-semibold text-xl ">{subtitle}</h1>
        </div>

        <div>{body}</div>

        <div className="flex h-36 items-end justify-center py-8">
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
