import React from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "./style2.scss";
import {
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/Login" />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="Login" element={<Login />}></Route>
          <Route path="Register" element={<Register />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
