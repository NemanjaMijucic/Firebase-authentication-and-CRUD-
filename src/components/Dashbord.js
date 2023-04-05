import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AddBook from "./AddBook";
import Books from "./Books";

const Dashboard = () => {
  const [error, setError] = useState();
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    setError("");
    try {
      await logout();
      navigate("/signup");
    } catch (err) {
      console.log(err);
      setError("failed to logout");
    }
  };
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email: </strong>
          {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update profile
          </Link>
          <Button variant="link" onClick={handleLogout}>
            Log out
          </Button>
        </Card.Body>
      </Card>
      <AddBook />
      <div className="w-100 text-center mt-2"></div>
      <Books />
    </>
  );
};

export default Dashboard;
