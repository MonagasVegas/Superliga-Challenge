import React, { useState } from "react";
import add from "../../assets/img/add.png";
import big from "../../assets/img/big.png";
import Papa from "papaparse";
import cancel from "../../assets/svg/cancel.svg";
import { useNavigate } from "react-router-dom";

import { CircularProgress } from "@material-ui/core";

const Container = () => {
  const [isLoading, setIsLoading] = useState(false);
  console.log("🐉 ~ Container ~ isLoading:", isLoading);

  const [data, setData] = useState([]);
  console.log("🐉 ~ Container ~ data:", data);
  const [selectedFile, setSelectedFile] = useState(null);
  console.log("🐉 ~ Container ~ selectedFile:", selectedFile);

  const navigate = useNavigate();

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setIsLoading(true);

    Papa.parse(file, {
      header: true,
      complete: (results) => {
        setData(results.data);
        setIsLoading(false);
      },
    });
  };

  const handleDelete = () => {
    setSelectedFile(null);
    setData([]);
  };

  const handleSend = () => {
    navigate("/table", { state: { data } });
  };

  return (
    <div className=" grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      <div className="w-[100%]  sm:w-[100%] md:w-[100%]  xl:w-[85%] lg:w-[85%] px-3 bg-white rounded-lg ">
        <div className="border-b border-gray-400 py-2 ">
          <h1 className="text-black text-2xl font-semibold text-left px-5 py-2">
            Hola, <br />
            ¿Tienes archivos grandes que enviar?
          </h1>
        </div>

        {/* Sube tus archivos */}
        {data.length === 0 && (
          <div className="flex flex-row gap-3 py-7 px-5 cursor-pointer">
            <img src={add} width={50} className="py-3" />
            <label className="text-2xl font-normal border border-white self-center">
              Sube tus archivos
              <input
                type="file"
                accept=".csv"
                onChange={handleFileUpload}
                className="absolute inset-0 opacity-0 w-0 h-0 "
              />
            </label>
          </div>
        )}

        {selectedFile && (
          <div className=" py-7 px-5 flex flex-col">
            <p className="text-lg font-semibold ">Archivo cargado:</p>
            <div
              onClick={handleDelete}
              className="py-2 cursor-pointer flex gap-7"
            >
              <p className="text-lg font-extralight self-center">
                {selectedFile.name}
              </p>
              <img src={cancel} width={15} className="self-center " />
            </div>
          </div>
        )}

        <div className="  content-end flex flex-wrap h-52 py-10">
          <button
            onClick={handleSend}
            className={`py-2 w-full font-semibold rounded-full ${
              isLoading || data.length === 0
                ? "bg-[#c6ced1] cursor-not-allowed text-white"
                : "bg-primary text-black hover:text-white"
            }`}
            type="submit"
            disabled={isLoading || data.length === 0}
          >
            {isLoading ? (
              <CircularProgress size={15} color="inherit" />
            ) : (
              "Enviar"
            )}
          </button>
        </div>
      </div>

      <div className=" w-full gap-5 ">
        <h1 className="text-white text-6xl font-semibold text-left   px-5 ">
          Envía archivos,
          <br /> mueve ideas{" "}
        </h1>
        <div className=" py-5 px-5">
          <p className="text-white text-lg font-light py-5 text-left">
            Te permite compartir tus archivos rápidamente sin limitaciones
            llevando tus ideas a donde se necesiten.
          </p>

          <p className="text-white text-lg font-light  text-left">
            Ahora puedes solicitar exactamente la opinión de lo que necesitas
            desde el mismo sitio que envías tus archivos.
          </p>
        </div>
        <div className="  px-5 flex content-end flex-wrap  h-40">
          <button
            className="py-2 w-1/2 font-semibold rounded-full bg-primary text-white hover:text-white "
            type="submit"
          >
            Pruébalo gratis
          </button>
        </div>
      </div>

      <div className=" w-full flex justify-center">
        <img
          src={big}
          className="w-full object-cover rounded-t-md "
          style={{ aspectRatio: "1/1" }}
        />
      </div>
      <br />
    </div>
  );
};

export default Container;
