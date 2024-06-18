import { useEffect, useState } from "react";
import useLocalStorage from "../../hooks";
import { useNavigate } from "react-router-dom";

import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  {
    id: 1,
    label: "Equipo",
    minWidth: 100,
    align: "center",
  },
  {
    id: 2,
    label: "Cantidad de socios",
    minWidth: 100,
    align: "center",
  },
  {
    id: 3,
    label: "Promedio de edad",
    minWidth: 100,
    align: "center",
  },
  {
    id: 3,
    label: "Menor edad registrada",
    minWidth: 100,
    align: "center",
  },
  {
    id: 3,
    label: "Mayor edad registrada",
    minWidth: 100,
    align: "center",
  },
];

const RequirementFive = () => {
  const navigate = useNavigate();
  const [auth] = useLocalStorage("@auth", []);
  const [newData, setNewData] = useState();

  useEffect(() => {
    const teamsData = {};

    auth.forEach((person) => {
      const { equipment, age } = person;

      if (!teamsData[equipment]) {
        teamsData[equipment] = {
          count: 0,
          totalAge: 0,
          minAge: Infinity,
          maxAge: -Infinity,
        };
      }

      const teamData = teamsData[equipment];
      teamData.count++;
      teamData.totalAge += parseInt(age);
      teamData.minAge = Math.min(teamData.minAge, parseInt(age));
      teamData.maxAge = Math.max(teamData.maxAge, parseInt(age));
    });

    // Ordenar los equipos por cantidad de socios de mayor a menor
    const sortedTeams = Object.keys(teamsData).sort(
      (a, b) => teamsData[b].count - teamsData[a].count
    );

    const results = sortedTeams.map((team) => {
      const teamData = teamsData[team];
      const averageAge = teamData.totalAge / teamData.count;

      return {
        equipment: team,
        numberPartners: teamData.count,
        average: averageAge.toFixed(2),
        registeredMinor: teamData.minAge,
        largestRecorded: teamData.maxAge,
      };
    });

    setNewData(results);
  }, [auth]);

  const handleGoBack = () => {
    navigate("/file-added");
  };

  return (
    <div>
      <br />
      <div className="flex justify-center py-5">
        <h1 className="text-white font-semibold text-2xl ">
          Listado mayor y menor edad registrada entre los socios.
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

      <div className="px-10 py-10">
        <Paper elevation={3} className="rounded-full w-full ">
          <TableContainer className="rounded-table-container">
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  {columns?.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        minWidth: column.minWidth,
                        backgroundColor: "#f2f2f2",
                        fontWeight: "bold",
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {newData?.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">{row.equipment}</TableCell>
                    <TableCell align="center">{row.numberPartners}</TableCell>
                    <TableCell align="center">{row.average}</TableCell>
                    <TableCell align="center">{row.registeredMinor}</TableCell>
                    <TableCell align="center">{row.largestRecorded}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    </div>
  );
};

export default RequirementFive;
