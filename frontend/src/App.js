import "./App.css";
import AddBooks from "./Pages/AddBooks";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/addBooks" element={<AddBooks />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
