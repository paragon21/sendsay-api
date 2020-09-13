import React from 'react'
import Logo from '../../comps/Logo'
import LoginForm from '../../comps/LoginForm'
import './LoginPage.css'

const LoginPage = () => {
    return (
        <div className='login-page' >
        <div className="login-page__logo">
          <Logo />
        </div>
        <div className="login-page__form">
          <LoginForm />
        </div>
        <div className="login-page__git">
            <a className="login-page__gitlink" href="https://github.com/paragon21">@paragon21</a>
        </div>     
      </div>
    )
}

export default LoginPage