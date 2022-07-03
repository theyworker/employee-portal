import { Box } from "@mui/material";
import React from "react";
import { RowRadioButtonsComponent } from "../common/RadioButton";
import { TextFieldComponent } from "../common/TextField";

export const EmployeeForm = ({}) => {
  return (
    <Box >
      <TextFieldComponent label="First Name" />
      <TextFieldComponent label="Last Name" />
      <TextFieldComponent label="Email" />
      <TextFieldComponent label="Phone Number" />
      <RowRadioButtonsComponent label="Gender"/>
      
    </Box>
  );
};
