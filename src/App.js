// import libraries
import { HashRouter, Route, Routes } from "react-router-dom";

// import styles
import "bootstrap/dist/css/bootstrap.min.css";

// import pages
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

// import components
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <HashRouter>
      <div>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Wrapper>
      </div>
    </HashRouter>
  );
}

export default App;
