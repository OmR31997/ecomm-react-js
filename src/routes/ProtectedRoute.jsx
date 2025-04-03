import React from 'react';
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({children}) =>{

    const auth = useSelector((state) => state.auth);
    console.log(auth)
    console.log("ProtectedRoute Render - isAuthenticated:", auth.isAuthenticated);
    return  auth.isAuthenticated?children:<Navigate to={`/login`} />
    
}
export default ProtectedRoute
