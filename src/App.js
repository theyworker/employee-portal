import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Container, Typography } from "@mui/material";
import { EmployeeForm } from "./components/form/Employee";

function App() {
  return (
    <Container className="App" sx={{ marginTop: "2em" }}>
      <Typography variant="h4" component="div" gutterBottom textAlign="center">
        Employee Manager{" "}
      </Typography>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<EmployeeForm />} />
      </Routes>
    </Container>
  );
}

export default App;
