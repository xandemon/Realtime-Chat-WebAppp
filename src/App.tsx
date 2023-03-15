import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainChatApp from "./pages/MainChatApp";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { RouterProvider } from "react-router";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<MainChatApp />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
