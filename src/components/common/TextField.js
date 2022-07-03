import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const TextFieldComponent = ({
  id,
  label,
  onChange,
  value,
  error,
  helperText,
}) => (
  <Box sx={{ width: "100%" }}>
    <TextField
      id={id}
      label={label}
      variant="standard"
      onChange={onChange}
      value={value}
      error={error}
      helperText={helperText}
      sx={{ width: "35%", margin: "1em" }}
    />
  </Box>
);
