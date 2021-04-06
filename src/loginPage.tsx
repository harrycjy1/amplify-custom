import React, { ChangeEvent, useRef, useState } from 'react'
import { Auth } from 'aws-amplify'

const LoginPage = ({}) => {
  const [id, setId] = useState<string>('devchoddol99')
  const [password, setPassword] = useState<string>('devchoddol99@')

  const handleInputId = (e: string) => {
    setId(e)
  }

  const handleInputPassword = (e: string) => {
    setPassword(e)
  }

  const handleLogin = async () => {
    await Auth.signIn(id, password)
  }

  return (
    <div>
      <div>
        id :{' '}
        <input
          onChange={(e) => handleInputId(e.target.value)}
          defaultValue={'devchoddol99'}
        />
        password :{' '}
        <input
          onChange={(e) => handleInputPassword(e.target.value)}
          defaultValue={'devchoddol99@'}
        />
        <button type={'button'} onClick={handleLogin}>
          로그인
        </button>
      </div>
    </div>
  )
}

export default LoginPage
