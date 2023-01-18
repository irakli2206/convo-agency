import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

type Props = {
  redirectPath?: string
}


export const UnauthProtectedRoutes = ({ redirectPath = '/login' }: Props) => {
  const userEmail = localStorage.getItem('userEmail')

  if (!userEmail) {
    return <Navigate to={redirectPath} replace />;
  }

  return (
    <>

      <Outlet />
    </>
  )
}


export const AuthProtectedRoutes = ({ redirectPath = '/main' }: Props) => {
  const userEmail = localStorage.getItem('userEmail')

  if (userEmail) {
    return <Navigate to={redirectPath} replace />;
  }

  return (
    <>
      <Outlet />
    </>
  )
}
