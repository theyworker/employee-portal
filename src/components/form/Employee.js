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
  const { firstName, lastName, email, phone, gender } = useSelector(
    (state) => (state && state.form) || {}
  );

  const isNameValid = (name) => name && name.length > 5 && name.length < 11;

  const handleFirstName = (name) => dispatch(setFirstName(name));
  const handleLastName = (name) => dispatch(setLastName(name));
  const handleEmail = (email) => dispatch(setEmail(email));
  const handlePhone = (phone) => dispatch(setPhone(phone));
  const handleGender = (gender) => dispatch(setGender(gender));

  return (
    <Box>
      <TextFieldComponent
        label="First Name"
        value={firstName}
        onChange={(event, val) => handleFirstName(event.target.value)}
      />
      <TextFieldComponent
        label="Last Name"
        value={lastName}
        onChange={(event, val) => handleLastName(event.target.value)}
      />
      <TextFieldComponent
        label="Email"
        value={email}
        onChange={(event, val) => handleEmail(event.target.value)}
      />
      <TextFieldComponent
        label="Phone Number"
        value={phone}
        onChange={(event, val) => handlePhone(event.target.value)}
      />
      <RowRadioButtonsComponent
        label="Gender"
        value={gender}
        onChange={(event, val) => handleGender(event.target.value)}
      />
    </Box>
  );
};
