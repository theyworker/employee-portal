import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RowRadioButtonsComponent } from "../common/RadioButton";
import { TextFieldComponent } from "../common/TextField";
import {
  setFirstName,
  setLastName,
  setEmail,
  setPhone,
  setGender,
  clearForm
} from "../../redux/employees/employeeFormSlice";
import { ButtonComponent } from "../common/Button";
import axios, { Axios } from "axios";

export const EmployeeForm = ({ mode = "add", id }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { firstName, lastName, email, phone, gender } = useSelector(
    (state) => (state && state.form) || {}
  );
  const [error, setError] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    gender: false,
  });

  useEffect(
    ()=> {
      return () =>dispatch(clearForm())
    },
    []
  )

  const isNameValid = (name) => name && name.length > 5 && name.length < 11;
  const isEmailValid = (email) =>
    email && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  const isPhone = (phone) => phone && /\+65(6|8|9)\d{7}/g.test(phone);

  const handleFirstName = (name) => dispatch(setFirstName(name));
  const handleLastName = (name) => dispatch(setLastName(name));
  const handleEmail = (email) => dispatch(setEmail(email));
  const handlePhone = (phone) => dispatch(setPhone(phone));
  const handleGender = (gender) => dispatch(setGender(gender));

  const handleSubmit = () => {
    let errorObj = { ...error };

    errorObj.firstName = !isNameValid(firstName);
    errorObj.lastName = !isNameValid(lastName);
    errorObj.email = !isEmailValid(email);
    errorObj.phone = !isPhone(phone);
    errorObj.gender = gender ? false : true;

    const checkErrors = () =>
      Object.values(errorObj).some((value) => value == true);

    setError(errorObj);
    if (!checkErrors()) {
      if (mode == "edit") {
        axios
          .put(
            `https://62c1466c2af60be89ec41056.mockapi.io/v1/employee/${id}`,
            {
              firstName,
              lastName,
              email,
              phone,
              gender,
            }
          )
          .then((res) => {
            if (res.status == 200) {
              console.log("sucess");
              dispatch(clearForm())
              navigate(`../`)
            }
          });
      } else {
        axios
          .post("https://62c1466c2af60be89ec41056.mockapi.io/v1/employee", {
            firstName,
            lastName,
            email,
            phone,
            gender,
          })
          .then((res) => {
            if (res.status == 201) {
              console.log("sucess");
              dispatch(clearForm())
              navigate(`../`)
            }
          });
      }
    }
  };

  return (
    <Box sx={{}}>
      <TextFieldComponent
        label="First Name"
        value={firstName}
        error={error.firstName}
        onChange={(event, val) => handleFirstName(event.target.value)}
      />
      <TextFieldComponent
        label="Last Name"
        value={lastName}
        error={error.lastName}
        onChange={(event, val) => handleLastName(event.target.value)}
      />
      <TextFieldComponent
        label="Email"
        value={email}
        error={error.email}
        onChange={(event, val) => handleEmail(event.target.value)}
      />
      <TextFieldComponent
        label="Phone Number"
        value={phone}
        error={error.phone}
        onChange={(event, val) => handlePhone(event.target.value)}
      />
      <RowRadioButtonsComponent
        label="Gender"
        value={gender}
        error={error.gender}
        onChange={(event, val) => handleGender(event.target.value)}
      />
      <Box sx={{ textAlign: "right" }}>
        <ButtonComponent label="Submit" onClick={handleSubmit} />
      </Box>
    </Box>
  );
};
