import React from "react";
import { useNavigate } from "react-router-dom";
import CardTable from "../CardTable";
import useLocalStorage from "../hooks";

const columns = [
  {
    id: 1,
    label: "Nombre",
    minWidth: 100,
    align: "center",
  },
  {
    id: 2,
    label: "Edad",
    minWidth: 100,
    align: "center",
  },
  {
    id: 3,
    label: "Equipo",
    minWidth: 100,
    align: "center",
  },
  {
    id: 3,
    label: "Estado civil",
    minWidth: 100,
    align: "center",
  },
  {
    id: 3,
    label: "Nivel de Estudios",
    minWidth: 100,
    align: "center",
  },
];

const data = [
  {
    id: 1,
    title: "Cantidad total de personas registradas",
  },
  {
    id: 2,
    title: "El promedio de edad de los socios de Racing.",
  },
  {
    id: 3,
    title:
      "Listado con las 100 primeras personas casadas, con estudios Universitarios, ordenadas de menor a mayor según su edad. Por cada persona, mostrar: nombre, edad y equipo.",
  },
  {
    id: 4,
    title: "Listado con los 5 nombres más comunes entre los hinchas de River.",
  },
  {
    id: 5,
    title:
      "Listado, ordenado de mayor a menor según la cantidad de socios, que enumere, junto con cada equipo, el promedio de edad de sus socios, la menor edad registrada y la mayor edad registrada.",
  },
];

const Card = () => {
  const navigate = useNavigate();
  const [auth] = useLocalStorage("@auth", []);

  const handleCardClick = (id) => {
    console.log("click hiciis", id);
    const routes = {
      1: "/requirement1",
      2: "/requirement2",
      3: "/requirement3",
      4: "/requirement4",
      5: "/requirement5",
    };

    navigate(routes[id]);
  };

  return (
    <div className="py-5 ">
      <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-5 gap-5 px-[40px]">
        {data.map((item) => (
          <div
            onClick={() => handleCardClick(item.id)}
            key={item.id}
            className="rounded-lg bg-white"
          >
            <div
              style={{ aspectRatio: "auto" }}
              className="flex flex-col px-5 gap-2 py-3 justify-center cursor-pointer"
            >
              <span className="text-black font-bold text-xl underline">
                REQUERIMIENTO
              </span>
              <span className="text-gray-600 font-extralight text-md text-center">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div>
        <CardTable
          columns={columns}
          rows={auth}
          visible={true}
          rowsPerPageOptions={[5, 10, 20, 30, 40, 50, 60]}
        />
      </div>
    </div>
  );
};

export default Card;
