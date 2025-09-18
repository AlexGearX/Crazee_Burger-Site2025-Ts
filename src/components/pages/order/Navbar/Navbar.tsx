import NavbarRightSide from '@/components/pages/order/Navbar/NavbarRightSide'
import Logo from '@/components/reusable-ui/Logo'
import { theme } from '@/theme/theme'
import { refreshPage } from '@/utils/window'
import styled from 'styled-components'

export default function Navbar() {
  return (
    <NavbarStyled>
      <Logo className="logo-order-page" onClick={() => refreshPage()} />
      <NavbarRightSide />
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
  background: ${theme.colors.white};
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;

  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
  border-bottom: 1px solid ${theme.colors.greyLight};
  /* align-items: center; */

  .logo-order-page {
    cursor: pointer;
  }
`
