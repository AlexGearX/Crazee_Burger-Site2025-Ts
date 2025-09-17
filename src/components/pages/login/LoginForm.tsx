import { authenticateUser } from '@/api/user'
import Welcome from '@/components/pages/login/Welcome'
import Button from '@/components/reusable-ui/Button'
import TextInput from '@/components/reusable-ui/TextInput'
import { spin } from '@/theme/animations'
import { theme } from '@/theme/theme'
import { loginSchema } from '../../../../schema/login.schema'
import { useState } from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import { IoChevronForward } from 'react-icons/io5'
import { LuLoader2 } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export default function LoginForm() {
  // state
  const [username, setUsername] = useState<string>('Bob')
  const [error, setError] = useState<string>('')
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  // comportements
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    try {
      setIsLoading(true)
      const validatedData = loginSchema.safeParse({ username })

      if (!validatedData.success) {
        setError(validatedData.error.issues[0]?.message || 'Erreur de validation')
        return
      }

      const userReceived = await authenticateUser(validatedData.data.username)

      await new Promise((resolve) => setTimeout(resolve, 1000))
      setUsername('')
      navigate(`order/${userReceived.username}`)
    } catch (error) {
      if (error instanceof Error && 'issues' in error) {
        const zodError = error as any
        setError(zodError.issues[0]?.message || 'Erreur de validation')
      } else {
        console.error(error)
        setError('Erreur lors de la connexion')
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
    if (error) {
      setError('')
    }
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
          Icon={<BsPersonCircle />}
          className="input-login"
          version="normal"
        />

        {error ? <div className="error-message">{error}</div> : <div className="error-space"></div>}

        <Button
          className="button-login"
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
  .error-message {
    font-family: Open Sans;
    font-weight: ${theme.fonts.weights.regular};
    font-size: 16px;
    margin: 10px 0 18px 0;
    color: ${theme.colors.red};
    line-height: 100%;
    animation: errorPulse 0.3s ease-out;
  }

  @keyframes errorPulse {
    0% {
      transform: scale(0.95);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  .input-login {
    margin: 0 0 0px 0;
  }

  .error-space {
    height: 18px;
  }

  .button-login {
    height: 55px;
  }

  .loader {
    font-size: ${theme.fonts.size.P2};
    animation: ${spin} 1s linear infinite;
    transition: opacity 0.3s ease-in-out;
  }
`
