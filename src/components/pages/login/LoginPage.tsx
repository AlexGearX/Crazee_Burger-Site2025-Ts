import { LoginFooter } from '@/components/pages/login/LoginFooter'
import LoginForm from '@/components/pages/login/LoginForm'
import Logo from '@/components/reusable-ui/Logo'
import styled from 'styled-components'

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <div className="login-container">
        <Logo className={'logo-login-page'} />
        <LoginForm />
      </div>
      <LoginFooter />
    </LoginPageStyled>
  )
}

const LoginPageStyled = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 138px;

  ::before {
    content: '';
    background: url('/images/burger-right.jpg') rgba(0, 0, 0, 0.3);
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo-login-page {
    transform: scale(2.5);
  }
`
