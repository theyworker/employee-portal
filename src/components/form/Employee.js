import { Box } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RowRadioButtonsComponent } from "../common/RadioButton";
import { TextFieldComponent } from "../common/TextField";
import {
  setFirstName,
  setLastName,
  setEmail,
  setPhone,
  setGender,
} from "../../redux/employees/employeeFormSlice";

export const EmployeeForm = ({}) => {
  const dispatch = useDispatch();
  
  const isFirstNameValid = (firstName) => firstName && firstName.length > 5 && firstName.length < 11
  return (
    <Box>
      <TextFieldComponent
        label="First Name"
        onChange={(event, val) => dispatch(setFirstName(event.target.value))}
      />
      <TextFieldComponent label="Last Name" />
      <TextFieldComponent label="Email" />
      <TextFieldComponent label="Phone Number" />
      <RowRadioButtonsComponent label="Gender" />
    </Box>
  );
};
