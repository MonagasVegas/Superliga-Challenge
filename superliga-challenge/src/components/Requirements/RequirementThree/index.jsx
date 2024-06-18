import React, { useEffect, useState } from "react";
import useLocalStorage from "../../hooks";
import CardTable from "../../CardTable";
import { useNavigate } from "react-router-dom";

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
];

const RequirementThree = () => {
  const navigate = useNavigate();

  const [auth] = useLocalStorage("@auth", []);
  const [result, setResult] = useState([]);
  console.log("🐉 ~ RequirementThree ~ result:", result);

  useEffect(() => {
    const filteredAuth = auth.filter(
      (item) => item.status === "Casado" && item.study === "Universitario"
    );
    const sortedAuth = filteredAuth.sort((a, b) => a.age - b.age);
    const captureFirst = sortedAuth.slice(0, 100);

    setResult(captureFirst);
  }, [auth]);

  const handleGoBack = () => {
    navigate("/file-added");
  };

  return (
    <div>
      <br />
      <div className="flex justify-center py-5">
        <h1 className="text-white font-semibold text-2xl ">
          Listado con las 100 primeras personas.
        </h1>
      </div>

      <div className="flex py-5 ml-10 w-1/3 ">
        <button
          onClick={handleGoBack}
          className="py-1 w-1/2  font-semibold rounded-full bg-primary text-black hover:text-white"
          type="submit"
        >
          Volver
        </button>
      </div>

      <div>
        <CardTable
          columns={columns}
          rows={result}
          visible={false}
          rowsPerPageOptions={[5, 100]}
        />
      </div>
    </div>
  );
};

export default RequirementThree;
