import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Summary } from "./components/Home/Summary";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
