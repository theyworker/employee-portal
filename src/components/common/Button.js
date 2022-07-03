import * as React from "react";
import Button from "@mui/material/Button";


export const ButtonComponent = ({label}) => {
  return (
    <Button variant="contained" >
      {label}
    </Button>
  );
};
