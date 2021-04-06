import Auth from '@aws-amplify/auth'
import React from 'react'

const LogoutPage = ({}) => {
  const handleLogout = async () => {
    console.log('hit')
    Auth.signOut()
  }

  return (
    <div>
      <h1>로그인 중입니다.</h1>
      <div>
        <button type={'button'} onClick={handleLogout}>
          로그아웃
        </button>
      </div>
    </div>
  )
}

export default LogoutPage
