import { Navigate, useLocation } from "react-router-dom";
import ApiClient from "./ApiClient";

export const CustomerRoute = ({ children }) => {
    const location = useLocation();

    return ApiClient.isAuthenticated() ? (
        children
    ) : (
        <Navigate to="/login" replace state={{ from: location }} />
    );
};

export const AdminRoute = ({ children }) => {
    const location = useLocation();

    return ApiClient.isAdmin() ? (
        children
    ) : (
        <Navigate to="/login" replace state={{ from: location }} />
    );
};
