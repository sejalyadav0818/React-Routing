import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Profiles from "./Components/Profiles";
import LoginProvider from "./Context/LoginProvider";

function App() {
  return (
    <>
      <LoginProvider>
        <Router>
          <Routes>
            <Route path="/profile" element={<Profiles />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </LoginProvider>
    </>
  );
}

export default App;
