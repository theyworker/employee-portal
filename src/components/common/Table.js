import * as React from "react";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";


export const TableComponent = ({ columns, data }) => {
  let navigate = useNavigate();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns &&
              columns.map((column) => (
                <TableCell align="left" sx={{fontWeight: '600'}}>{column.title}</TableCell>
              ))}
 
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >


              {columns &&
                columns.map((column) => (
                  <TableCell align="left">{row[column.mappingField]}</TableCell>
                ))}
                <TableCell align="left"> <Button onClick={()=>  navigate(`../edit/${row.id}`)}>Edit</Button> </TableCell>
                <TableCell align="left"> <Button onClick={()=>  navigate(`../delete/${row.id}`)}>Delete</Button> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
