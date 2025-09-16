import { authenticateUser } from '@/api/user'
import Welcome from '@/components/pages/login/Welcome'
import Button from '@/components/reusable-ui/Button'
import TextInput from '@/components/reusable-ui/TextInput'
import { spin } from '@/theme/animations'
import { theme } from '@/theme/theme'
import { useState } from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import { IoChevronForward } from 'react-icons/io5'
import { LuLoader2 } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export default function LoginForm() {
  // state
  const [username, setUsername] = useState<string>('Bob')
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  // comportements
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true)
    event.preventDefault()
    try {
      const userReceived = await authenticateUser(username)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setUsername('')
      navigate(`order/${userReceived.username}`)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  // affichage
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <Welcome />
      <div>
        <TextInput
          value={username}
          onChange={handleChange}
          placeholder={'Entrez votre prénom'}
          required
          Icon={<BsPersonCircle />}
          className="input-login"
          version="normal"
        />

        <Button
          label={isLoading ? '' : 'Accéder à mon espace'}
          Icon={isLoading ? <LuLoader2 className="loader" /> : <IoChevronForward />}
          disabled={isLoading}
        />
      </div>
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 40px ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};
  font-family: 'Amatic SC', cursive;

  hr {
    border: 1.5px solid ${theme.colors.loginLine};
    margin-bottom: ${theme.gridUnit * 5}px;
  }

  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P5};
  }

  h2 {
    margin: 20px 10px 10px;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P4};
  }

  .input-login {
    margin: 18px 0;
  }

  .loader {
    font-size: ${theme.fonts.size.P0};
    animation: ${spin} 1s linear infinite;
    transition: opacity 0.3s ease-in-out;
  }
`
