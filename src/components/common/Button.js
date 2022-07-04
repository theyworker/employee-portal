import * as React from "react";
import Button from "@mui/material/Button";

export const ButtonComponent = ({ label, onClick }) => {
  return (
    <Button variant="contained" onClick={onClick}>
      {label}
    </Button>
  );
};
