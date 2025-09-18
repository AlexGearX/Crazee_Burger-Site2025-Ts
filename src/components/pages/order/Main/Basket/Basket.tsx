import BasketBody from '@/components/pages/order/Main/Basket/BasketBody/BasketBody'
import BasketFooter from '@/components/pages/order/Main/Basket/BasketFooter'
import BasketHeader from '@/components/pages/order/Main/Basket/BasketHeader/BasketHeader'
import { theme } from '@/theme/theme'
import styled from 'styled-components'

export default function Basket() {
  return (
    <BasketStyled>
      <BasketHeader />
      <BasketBody />
      <BasketFooter />
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  height: 85vh;

  .head {
    position: sticky;
    top: 0;
  }

  .footer {
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    position: sticky;
    bottom: 0;
  }
`
