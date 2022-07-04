import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { useEmployees } from "../../customHooks/useEmployees";
import { TableComponent } from "../common/Table";
import { SummaryColumns } from "./const";
import { ButtonComponent } from "../common/Button";

export const Summary = () => {
  let navigate = useNavigate();
  const { employeeData } = useEmployees();
  
  return (
    <Box>
        <Box sx={{textAlign: 'right', marginBottom: '1em'}}>
        <ButtonComponent label="Add" onClick={()=>  navigate("../add")}/>
        </Box>
      <TableComponent columns={SummaryColumns} data={employeeData} />
    </Box>
  );
};
