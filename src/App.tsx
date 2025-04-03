import { useContext } from "react";
import "./App.css";
import { AuthContext } from "./provider/auth-provider";
import { Route, Routes } from "react-router-dom";
import LogIn from "./page/log-in-page/Index";
import Home from "./page/home/Index";

function App() {
  const { isAuth } = useContext(AuthContext);
  
  if (isAuth) {
    return (
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<LogIn />} />
      </Routes>
    );
  }
}

export default App;