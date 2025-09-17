import { theme } from '@/theme/theme'
import styled from 'styled-components'

export function LoginFooter() {
  return (
    <LoginFooterStyled>
      <span>© {new Date().getFullYear()} Groovy Burger - Tous droits réservés.</span>
      <span>Made with ❤️ by ViDev</span>
    </LoginFooterStyled>
  )
}

const LoginFooterStyled = styled.div`
  position: absolute;
  bottom: 4%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${theme.spacing.xs};

  span {
    font-size: ${theme.fonts.size.P0};
    font-weight: 100;
    color: ${theme.colors.white};
  }
`
