import React from 'react';
import { useDispatch } from 'react-redux';
import { setEmployeeData } from '../../redux/employees/employeeSlice';

export const Summary = ()=>{

    const dispatch = useDispatch()
    return <div>Summary     
        <button onClick={()=>dispatch(setEmployeeData([4,5,6 ]))}>Hello</button>
    </div>
}