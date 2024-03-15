import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" exact element={<Home></Home>} />
        <Route path="*" exact element={<Home></Home>} />
        <Route path="/About" exact element={<About></About>} />
        <Route path="/Menu" exact element={<Menu></Menu>} />
        <Route path="/Contact" exact element={<Contact></Contact>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
