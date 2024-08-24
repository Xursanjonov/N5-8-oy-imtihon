import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const Auth = () => {
    const token = useSelector(state => state.auth.token) ?? null
    return token ? <Outlet /> : <Navigate to="/login" replace />
}

export default memo(Auth)