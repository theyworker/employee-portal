import React, { useEffect } from "react";
import { useEmployees } from "../../customHooks/useEmployees";
import { TableComponent } from "../common/Table";
import { SummaryColumns } from "./const";

export const Summary = () => {
  const { employeeData } = useEmployees();
  
  return (
    <div>
      <TableComponent columns={SummaryColumns} data={employeeData} />
    </div>
  );
};
