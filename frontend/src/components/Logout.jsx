import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout({setIsLoggedIn})
{
    const navigate = useNavigate();
    useEffect(()=>{
        setIsLoggedIn(false);
        navigate("/");
    },[setIsLoggedIn,navigate]);
    return null;
}