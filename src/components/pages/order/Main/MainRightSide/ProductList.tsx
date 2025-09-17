import Admin from '@/components/pages/order/Main/MainRightSide/Admin/Admin'
import Menu from '@/components/pages/order/Main/MainRightSide/Menu/Menu'
import { useOrderContext } from '@/context/OrderContext'
import { theme } from '@/theme/theme'
import styled from 'styled-components'

export default function ProductList() {
  const { isModeAdmin } = useOrderContext()

  return (
    <ProductListStyled>
      <Menu />
      {isModeAdmin && <Admin />}
    </ProductListStyled>
  )
}

const ProductListStyled = styled.div`
  position: relative;
  overflow-y: hidden;
  display: grid;
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
`
