import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { useLocation } from "react-router-dom";
import './index.css'
import useLocalStorage from "../hooks";

const columns = [
  { 
    id: 1, 
    label: "Nombre", 
    minWidth: 100,
     align: "center"
     },
  {
     id: 2,
      label: "Edad",
       minWidth: 100, 
       align: "center"
       },
  {
    id: 3,
    label: "Equipo",
    minWidth: 100,
    align: "center",
  },
  {
    id: 4,
    label: "Estado Civil",
    minWidth: 100,
    align: "center",
  },
  {
    id: 5,
    label: "Nivel de Estudios",
    minWidth: 100,
    align: "center",
  },
];

const CardTable = () => {
  // const { state } = useLocation();
  // console.log("🐉 ~ Table ~ state:", state);
  // const rows = state.data;

  const [auth] = useLocalStorage("@auth", []);



  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="px-10 py-10">
      <Paper elevation={3} className="rounded-full w-full ">
        <TableContainer  className="rounded-table-container" >
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
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
              {auth
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="center">{row.age}</TableCell>
                    <TableCell align="center">{row.equipment}</TableCell>
                    <TableCell align="center">{row.status}</TableCell>
                    <TableCell align="center">{row.study}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          sx={{ fontSize: 10, color: "#70808D" }}
          labelRowsPerPage="Filas por página"
          rowsPerPageOptions={[5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
          component="div"
          count={auth.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default CardTable;
