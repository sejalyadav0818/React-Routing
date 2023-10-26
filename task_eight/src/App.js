import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Contact from "./components/Contact";
import HOme from "./components/HOme";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<HOme />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
