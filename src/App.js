import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Box, Typography } from "@mui/material";

function App() {
  return (
    <Box className="App">
      <Typography component={"h1"}>Employee Manager </Typography>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Box>
  );
}

export default App;
