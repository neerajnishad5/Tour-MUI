import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tour from "./pages/Tour";
import SearchAppBar from "./components/AppBar";

function App() {
  return (
    <BrowserRouter>
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Tour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
