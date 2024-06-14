import React from "react";
import add from "../../assets/img/add.png";
import big from "../../assets/img/big.png";

const Container = () => {
  const handleUpload = () => {
    console.log("AQUI POR FAVOR");
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

        <div className="flex flex-row gap-5 py-7">
          <div onClick={handleUpload} className="flex gap-3 cursor-pointer">
            <img src={add} width={50} className="py-3" />
            <h2 className="text-lg font-semibold border border-white self-center">
              Sube tus archivos
            </h2>
          </div>
        </div>
        <div className="  content-end flex flex-wrap h-52 py-10">
          <button
            className="py-2 w-full font-semibold rounded-full bg-primary text-black hover:text-white "
            type="submit"
          >
            Enviar
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
