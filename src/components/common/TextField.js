import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const TextFieldComponent = ({ id, label, onChange }) => (
  <TextField id={id} label={label} variant="standard" onChange={onChange} />
);
