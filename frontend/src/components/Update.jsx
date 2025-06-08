import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/update.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function Update({setIsLoggedIn})
{
    let [afterEmployee,setAfterEmployee] = useState({});
    useEffect(() => {
        setIsLoggedIn(true);
    }, [setIsLoggedIn]);
    let [message,setMessage] = useState("");
    let navigate = useNavigate();
    let location = useLocation();
    let emp = location.state;
    useEffect(() => {
        setAfterEmployee(emp);
    }, [emp]);
    const change = (e) => {
        setAfterEmployee({...afterEmployee,[e.target.name]:e.target.value});
    }
    const handleUpdate = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.put("http://localhost:8081/updateemployee",afterEmployee);
            console.log(response.data);
            if(response.data != null)
            {
                alert("Updation Successful!");
                navigate("/profile",{state: response.data});
            }
        }
        catch(error)
        {
            const errorMsg = error.response.data || error.message || "Unknown error";
            setMessage("Updation Failed: "+errorMsg);
        }
    }
    return(
        <div id="header-update" className="d-flex align-items-center justify-content-center min-vh-100">
        <div className="card p-4 shadow" style={{ maxWidth: "500px", width: "100%" }} >
        <h3 className="text-center mb-4">Update Employee Details</h3>
        <form onSubmit={handleUpdate}>
          <div className="mb-3">
            <input type="text" className="form-control" value={afterEmployee.employeename || ""} name="employeename" placeholder="Full Name" onChange={change} required/>
          </div>
          <div className="mb-3">
            <input type="number" className="form-control" value={afterEmployee.employeesalary || ""} name="employeesalary" placeholder="Salary" onChange={change} required/>
          </div>
          <div className="mb-3">
            <input type="number" className="form-control" value={afterEmployee.employeedeptno || ""} name="employeedeptno" placeholder="Department No" onChange={change} required/>
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" value={afterEmployee.emailid || ""} name="emailid" placeholder="Email" onChange={change} required/>
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" value={afterEmployee.password || ""} name="password" placeholder="Password" onChange={change} required/>
          </div>
          <div className="mb-4">
            <input type="tel" className="form-control" value={afterEmployee.mobileNumber || ""} name="mobileNumber" placeholder="Mobile Number" maxLength={10} onChange={change} required/>
          </div>
          <button type="submit" className="btn btn-primary w-100 fw-bold">
            Update
          </button>
        </form>
        {message && ( <div className="alert alert-info text-center mt-3" role="alert"> {message} </div>)}
        </div>
        </div>
    )
}