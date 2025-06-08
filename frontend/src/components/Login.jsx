import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
import axios from "axios";

export default function Login({setIsLoggedIn}) {
  const [employee, setEmployee] = useState({ emailid: "", password: "" });
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const change = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8081/loginemployee", employee);
      if (response.data != null) {
        setIsLoggedIn(true);
        navigate("/profile", { state: response.data });
      }
    } catch (error) {
      const errorMsg = error.response?.data || error.message || "Unknown error";
      setMessage("Login Failed: " + errorMsg);
    }
  };

  return (
    <div id="header-login" className="d-flex align-items-center justify-content-center min-vh-100">
      <div id="inner-login" className="card p-4 shadow" style={{ maxWidth: "500px", width: "100%" }}>
        <h3 className="text-center mb-4 text-primary">Employee Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input type="email" className="form-control" name="emailid" placeholder="Email" value={employee.emailid} onChange={change} required/>
          </div>
          <div className="mb-3">
          <input type="password" className="form-control" name="password" placeholder="Password" value={employee.password} onChange={change} required/>
          </div>
          <button type="submit" className="btn btn-primary w-100 fw-bold">
            Login
          </button>
        </form>
        <div id="link-register" className="text-center mt-3">
          <Link to={"/register"} className="text-decoration-none" >
            Create an Account? <strong>Register</strong>
          </Link>
        </div>
        {message && ( <div className="alert alert-info text-center mt-3" role="alert"> {message} </div>)}
      </div>
    </div>
  );
}
