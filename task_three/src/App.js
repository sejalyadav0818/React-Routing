import Contact from "./Components/Contact";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact/:id" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
