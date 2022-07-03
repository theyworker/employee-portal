import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Container, Typography } from "@mui/material";

function App() {
  return (
    <Container className="App" sx={{marginTop: '2em'}}>
      <Typography variant="h4" component="div" gutterBottom textAlign='center'>Employee Manager </Typography>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Container>
  );
}

export default App;
