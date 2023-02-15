import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Breeds from "./Pages/Breeds";
import Hot from "./Pages/Hot";

function App() {
  return (
    <Router>
      <h1> DOG APP</h1>
      <nav>
        <div className="header">
          <Link to="/">Home</Link>
          <Link to="/hot">Hot</Link>
          <Link to="/breeds">Breeds</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hot" element={<Hot />} />
        <Route path="/breeds" element={<Breeds />} />
      </Routes>
    </Router>
  );
}

export default App;
