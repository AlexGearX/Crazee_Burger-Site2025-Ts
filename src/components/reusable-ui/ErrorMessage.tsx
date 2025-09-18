import { theme } from '@/theme/theme'
import styled from 'styled-components'

export default function ErrorMessage({ error }: { error: string }) {
  if (!error) return null
  return <StyledErrorMessage className="error-message">{error}</StyledErrorMessage>
}

const StyledErrorMessage = styled.div`
  font-family: Open Sans;
  font-weight: ${theme.fonts.weights.regular};
  font-size: 16px;
  margin: 18px 0 0 0;
  color: ${theme.colors.red};
  line-height: 100%;
  animation: errorPulse 0.3s ease-out;
`
