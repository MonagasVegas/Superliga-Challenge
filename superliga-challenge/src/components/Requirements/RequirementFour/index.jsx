import  { useEffect, useState } from "react";
import useLocalStorage from "../../hooks";
import Modal from "../../Modal";

const RequirementFour = () => {
  const [auth] = useLocalStorage("@auth", []);
  const [result, setResult] = useState([]);

  useEffect(() => {
    const filteredTeam = auth.filter((data) => data.equipment === "River");
    // la cantidad de veces que aparece cada miembro de river en el arreglo.
    const membersCount = filteredTeam.reduce((counts, member) => {
      counts[member.name] = (counts[member.name] || 0) + 1;
      return counts;
    }, {});

    //Ordena de mayor a menor aparicion y selecciona los 5 primeros.
    const sortMembers = Object.entries(membersCount)
      .sort(([, countA], [, countB]) => countB - countA)
      .slice(0, 5)
      .map(([name]) => name);

    setResult(sortMembers);
  }, [auth]);

  return (
    <div>
      <Modal
        title="Cinco nombres mas comunes entre los hinchas del River."
        body={
          <>
            <div className="flex justify-center ">
              <ul>
                {result?.map((data) => (
                  <li className="font-serif py-1" key={data}>
                    ~ {data}
                  </li>
                ))}
              </ul>
            </div>
          </>
        }
      />
    </div>
  );
};

export default RequirementFour;
