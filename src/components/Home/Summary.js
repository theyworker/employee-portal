import React, { useEffect } from "react";
import { useEmployees } from "../../customHooks/useEmployees";
import { TableComponent } from "../common/Table";

export const Summary = () => {
  const { employeeData } = useEmployees();

  return (
    <div>
      {employeeData && employeeData.map((emp) => <p>Apple</p>)}
      <TableComponent />
    </div>
  );
};
