import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';

function ProtectedRoute() {
    const { currentUser } = useAuth();
    return(
        currentUser ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default ProtectedRoute