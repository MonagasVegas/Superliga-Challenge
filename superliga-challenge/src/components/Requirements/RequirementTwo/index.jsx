import React, { useEffect, useState } from "react";
import Modal from "../../Modal";
import useLocalStorage from "../../hooks";

const RequirementTwo = () => {
  const [auth] = useLocalStorage("@auth", []);
  const [result, setResult] = useState()

  useEffect(() => {
    // filtramos por equipo racing
    const filteredData = auth.filter((item) => item.equipment === "Racing");
    //calculamos la suma total de las edades de los que estan en el equipo racing.
    const totalAge = filteredData.reduce((total, member) => total + parseInt(member.age),0);
    //obtenemos el promedio.
    const average = totalAge / filteredData.length;
    setResult(average)
  }, [auth]);

  return (
    <div>
      <Modal 
      title={result?.toFixed(2)}
      subtitle="Es el promedio de edad de los socios del equipo RACING" 
      />
    </div>
  );
};

export default RequirementTwo;
