import React, { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
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
  const { currentUser } = useContext(AuthContext);
  console.log(`Current user: ${currentUser.displayName}`);
  // const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  //   if (currentUser.uid == "") {
  //     console.log("inside protected");
  //     return <Navigate to="/login" />;
  //   }
  //   console.log("outside protected");
  //   return children;
  // };
  return (
    <>
      <Router>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                currentUser.displayName ? <MainChatApp /> : <Login />
                // <ProtectedRoute>
                //   <MainChatApp />
                // </ProtectedRoute>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
