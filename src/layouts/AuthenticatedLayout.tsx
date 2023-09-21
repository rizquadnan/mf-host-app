import React, { ReactNode } from 'react'
import LayoutBase from './LayoutBase'

type AuthenticatedLayoutProps = {
  children: ReactNode
}
const AuthenticatedLayout = (props: AuthenticatedLayoutProps) => {
  return (
    <LayoutBase isAuthenticated>
      {props.children}
    </LayoutBase>
  )
}

export default AuthenticatedLayout