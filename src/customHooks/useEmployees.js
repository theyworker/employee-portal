import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmployeeData } from "../redux/employees/employeeSlice";
import Axios from "axios";
import { BaseURL } from "../const/API";

export const useEmployees = () => {
  const employeeData = useSelector(
    (state) => (state && state.employee && state.employee.data) || []
  );

  const dispatch = useDispatch();

  const fetchEmployeeData = async () =>
    Axios.get(BaseURL).then(
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
