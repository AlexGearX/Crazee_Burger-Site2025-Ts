import styled from 'styled-components'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useOrderContext } from '@/context/OrderContext'
import { initialiseUserSession } from '@/components/pages/order/helpers/initialiseUserSession'
import Navbar from '@/components/pages/order/Navbar/Navbar'
import Main from '@/components/pages/order/Main/Main'
import { theme } from '@/theme/theme'

export default function OrderPage() {
  // state
  const { username } = useParams()
  const { setMenu, setBasket } = useOrderContext()

  useEffect(() => {
    if (username) initialiseUserSession(username, setMenu, setBasket)
  }, [])

  //affichage (render)
  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar />
        <Main />
      </div>
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`
