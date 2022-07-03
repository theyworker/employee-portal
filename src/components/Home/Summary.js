import React, { useEffect } from "react";
import { useEmployees } from "../../customHooks/useEmployees";
// import { useDispatch } from 'react-redux';
// import { setEmployeeData } from '../../redux/employees/employeeSlice';

export const Summary = () => {
  const { employeeData, fetchEmployeeData } = useEmployees();
  //   const emp2 = useEmployees();
  //   const emp3 = useEmployees();
  //   const emp4 = useEmployees();
  //   const dispatch = useDispatch();
//   useEffect(
//       ()=>{
//         if(employeeData.length == 0){fetchEmployeeData()}
//       },[employeeData.length]
//   )
  return (
    <div>
      Summary
      <button
      //   onClick={() => dispatch(setEmployeeData([4, 5, 6]))}
      >
        Hello
      </button>
    </div>
  );
};
