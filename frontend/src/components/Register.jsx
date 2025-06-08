import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/register.css";

export default function Register() {
  const [employee, setEmployee] = useState({});
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  const change = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8081/employeeregistration",employee);
      setResult(response.data);
      if (response.data === "Data Inserted") {
        alert("Registration Successful!");
        navigate("/");
      }
    } catch (error) {
        const errorMsg = error.response.data || error.message || "Unknown error";
      setResult("Registration Failed: " + errorMsg);
    }
  };

  return (
    <div id="header-register" className="d-flex align-items-center justify-content-center min-vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: "500px", width: "100%" }} >
        <h3 className="text-center mb-4 text-primary">Employee Registration</h3>
        <form onSubmit={submit}>
          <div className="mb-3">
            <input type="text" className="form-control" name="employeename" placeholder="Full Name" onChange={change} required/>
          </div>
          <div className="mb-3">
            <input type="number" className="form-control" name="employeesalary" placeholder="Salary" onChange={change} required/>
          </div>
          <div className="mb-3">
            <input type="number" className="form-control" name="employeedeptno" placeholder="Department No" onChange={change} required/>
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" name="emailid" placeholder="Email" onChange={change} required/>
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" name="password" placeholder="Password" onChange={change} required/>
          </div>
          <div className="mb-4">
            <input type="tel" className="form-control" name="mobileNumber" placeholder="Mobile Number" maxLength={10} onChange={change} required/>
          </div>
          <button type="submit" className="btn btn-primary w-100 fw-bold">
            Register
          </button>
        </form>

        <div className="text-center mt-3">
          <Link to="/" className="text-decoration-none">
            Already have an account? <strong>Login</strong>
          </Link>
        </div>
        {result && ( <div className="alert alert-info text-center mt-3" role="alert"> {result} </div>)}
      </div>
    </div>
  );
}
