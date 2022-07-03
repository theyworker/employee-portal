import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useEmployees } from "../../customHooks/useEmployees";
import { TableComponent } from "../common/Table";
import { SummaryColumns } from "./const";

export const Summary = () => {
  const { employeeData } = useEmployees();
  
  return (
    <Box>
      <TableComponent columns={SummaryColumns} data={employeeData} />
    </Box>
  );
};
