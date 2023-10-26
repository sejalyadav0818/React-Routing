import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Profiles from "./Components/Profiles";
import LoginProvider from "./Context/LoginProvider";
import PageNotFound from "./Components/PageNotFound";
import Welocme from "./Components/Welocme";

function App() {
  return (
    <>
      <LoginProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Welocme/>}/>
            <Route path="/profile" element={<Profiles />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </LoginProvider>
    </>
  );
}

export default App;
