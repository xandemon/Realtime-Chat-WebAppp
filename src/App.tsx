import React, { useContext } from "react";
import { AuthContext, AuthContextProvider } from "./context/AuthContext";
import MainChatApp from "./pages/MainChatApp";
import Register from "./pages/Register";
import Login from "./pages/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
  const currentUser = useContext(AuthContext);
  const ProtectedRoute = () => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
  };
  return (
    <>
      <AuthContext.Provider value={currentUser}>
        <Router>
          <Routes>
            <Route path="/">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <MainChatApp />
                  </ProtectedRoute>
                }
              />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
          </Routes>
        </Router>
      </AuthContext.Provider>
    </>
  );
};

export default App;
