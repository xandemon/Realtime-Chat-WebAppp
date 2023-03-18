import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Login from "./pages/Login";
import MainChatApp from "./pages/MainChatApp";
import Register from "./pages/Register";

const App = () => {
  const loggedUser = useContext(AuthContext);
  console.log(loggedUser);
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            index
            element={loggedUser ? <MainChatApp /> : <Login />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
