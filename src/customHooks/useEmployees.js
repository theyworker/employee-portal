import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmployeeData } from "../redux/employees/employeeSlice";
// import { setEmployeeData } from "../../redux/employees/employeeSlice";
import Axios from "axios";

export const useEmployees = () => {
  const employeeData = useSelector(
    (state) => (state && state.employee && state.employee.data) || []
  );

  const dispatch = useDispatch();

  const fetchEmployeeData = async () =>
    Axios.get("https://62c1466c2af60be89ec41056.mockapi.io/v1/employee").then(
      (res) => {
        dispatch(setEmployeeData(res.data));
      }
    );

    useEffect(() => {
      if (employeeData && employeeData.length == 0) {
        fetchEmployeeData();
      }
    }, [employeeData]);

  return { employeeData, fetchEmployeeData };
};
