import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { ButtonComponent } from "../common/Button";
import { useParams } from "react-router-dom";
import { useEmployees } from "../../customHooks/useEmployees";
import axios from "axios";
import { BaseURL } from "../../const/API";

export const DeleteEmployee = () => {
  let { id } = useParams();

  const { employeeData } = useEmployees();

  const [delEmpData] = employeeData.filter((emp) => emp.id == id);
  const handleDelete = async () => {
    axios
      .delete(`${BaseURL}${id}`)
      .then((res) => {
        if (res.status == 200) {
          console.log("sucess");
        }
      });
  };

  return (
    <Box sx={{ textAlign: "center", marginTop: "5em" }}>
      <Typography component="h6">
        Are you sure you want to delete - {delEmpData && delEmpData.firstName}?
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5em 15em",
        }}
      >
        <ButtonComponent label="Cancel"></ButtonComponent>
        <ButtonComponent label="Confirm" onClick={handleDelete}></ButtonComponent>
      </Box>
    </Box>
  );
};
