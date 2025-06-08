import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/profile.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function Profile({ setIsLoggedIn })
{
    let [msg,setMsg] = useState("");
    let navigate = useNavigate();
    let location = useLocation();
    let employee = location.state;
    useEffect(() => {
        setIsLoggedIn(true);
    }, [setIsLoggedIn]);
    const deleteProfile = async ()=>{
        const confirmMsg = confirm("Are you sure you really want to delete this profile?");
        if(!confirmMsg) return;
        try{
            const response = await axios.delete(`http://localhost:8081/deleteemployee/${employee.employeeid}`);
            setMsg(response.data);
            if(response.data == "Data Deleted")
            {
                navigate("/");
            }
        }
        catch(error)
        {
            setMsg(""+error.response.data)
        }
    }
    const handleUpdate = () => {
    navigate("/update", { state: employee });
  };
    return(
        <div id="header-profile" className="d-flex justify-content-center align-items-center min-vh-100 ">
      <div className="card shadow p-4" style={{ maxWidth: "500px", width: "100%" }}>
        <h2 className="text-center text-primary mb-4">Employee Profile</h2>
        <ul className="list-group list-group-flush mb-3">
          <li className="list-group-item">
            <strong>Employee ID:</strong> {employee.employeeid}
          </li>
          <li className="list-group-item">
            <strong>Name:</strong> {employee.employeename}
          </li>
          <li className="list-group-item">
            <strong>Email:</strong> {employee.emailid}
          </li>
          <li className="list-group-item">
            <strong>Department No:</strong> {employee.employeedeptno}
          </li>
          <li className="list-group-item">
            <strong>Mobile Number:</strong> {employee.mobileNumber}
          </li>
          <li className="list-group-item">
            <strong>Salary:</strong> ₹{employee.employeesalary}
          </li>
        </ul>
        <div className="d-flex justify-content-between">
          <button onClick={handleUpdate} className="btn btn-warning">
            Edit Profile
          </button>
          <button onClick={deleteProfile} className="btn btn-danger">
            Delete Profile
          </button>
        </div>
      </div>
    </div>
    )
}