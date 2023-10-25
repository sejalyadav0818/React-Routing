import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Services from "./Components/Services";
import Home from "./Components/Home";


function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/services" element={<Services/>} />    
        </Routes>
      </Router>
    </>
  );
}

export default App;
