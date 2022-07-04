import * as React from "react";
import Button from "@mui/material/Button";

export const ButtonComponent = ({ label, onClick, sx }) => {
  return (
    <Button variant="contained" onClick={onClick} sx={sx}>
      {label}
    </Button>
  );
};
