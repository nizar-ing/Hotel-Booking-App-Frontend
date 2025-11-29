import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import ApiClient from "./ApiClient.js";



export const CustomerRoute = ({element: Component}) =>{
    const location = useLocation();
    return ApiClient.isAthenticated() ? (
        Component
    ):(
        <Navigate to="/login" replace state={{from: location}}/>
    )
}


export const AdminRoute = ({element: Component}) =>{
    const location = useLocation();
    return ApiClient.isAdmin() ? (
        Component
    ):(
        <Navigate to="/login" replace state={{from: location}}/>
    )
}
