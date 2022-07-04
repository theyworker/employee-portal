import React, { useEffect } from "react";
import { EmployeeForm } from "../form/Employee";
import { useParams } from "react-router-dom";
import { useEmployees } from "../../customHooks/useEmployees";
import { useDispatch } from "react-redux";
import { setAllFormData } from "../../redux/employees/employeeFormSlice";


export const EditEmployee = () => {
  let { id } = useParams();
  const { employeeData } = useEmployees();
  const dispatch = useDispatch();
  useEffect(() => {

    const [employeeFromData] = employeeData.filter((emp) => emp.id == id) ;
    if (employeeFromData) {
      dispatch(setAllFormData(employeeFromData));
    }
  }, [employeeData]);

  return <EmployeeForm mode="edit" id={id} />;
};
