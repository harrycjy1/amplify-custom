import React from 'react'
import './App.css'
import { Authenticator } from 'aws-amplify-react'
import { IAuthenticatorProps } from 'aws-amplify-react/lib-esm/Auth/Authenticator'

import Base from './Base'

function App() {
  const AlwaysOn = (props: IAuthenticatorProps) => {
    return (
      <div>
        <div>
          I am always here to show current auth state: {props.authState}
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <Authenticator hideDefault={true}>
          <Base />
          <AlwaysOn />
        </Authenticator>
      </header>
    </div>
  )
}

export default App
