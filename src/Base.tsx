import { IAuthenticatorProps } from 'aws-amplify-react/lib-esm/Auth/Authenticator'
import React, { FC } from 'react'
import LoginPage from './loginPage'
import LogoutPage from './logoutPage'

type BaseInterface = {
  func?: Function
} & IAuthenticatorProps

const Base: FC<BaseInterface> = (props) => {
  console.log(props)

  return props.authState === 'signedIn' ? <LogoutPage /> : <LoginPage />
}

export default Base
