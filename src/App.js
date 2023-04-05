import "./App.css";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashbord";
import Login from "./components/Login";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./context/AuthContext";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";

function App() {
  return (
    <>
      <AuthProvider>
        <Container
          className="d-flex align-items-center justify-content-center"
          styyle={{ minHeight: "100vx" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Routes>
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/update-profile"
                element={
                  <PrivateRoute>
                    <UpdateProfile />
                  </PrivateRoute>
                }
              />
              <Route path="/signup" element={<Signup />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route
                path="/forgot-password"
                element={<ForgotPassword />}
              ></Route>
            </Routes>
          </div>
        </Container>
      </AuthProvider>
    </>
  );
}

export default App;
