import { theme } from '@/theme/theme'
import styled from 'styled-components'

const FOOTER_MESSAGE = '© 2025 Groovy Burger - Tous droits réservés.'
const FOOTER_MESSAGE_BY = 'Made with ❤️ by ViDev'

export function LoginFooter() {
  return (
    <LoginFooterStyled>
      <span>{FOOTER_MESSAGE}</span>
      <span>{FOOTER_MESSAGE_BY}</span>
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
