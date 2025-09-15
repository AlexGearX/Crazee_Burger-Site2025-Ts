import AdminPanel from '@/components/pages/order/Main/MainRightSide/Admin/AdminPanel/AdminPanel'
import AdminTabs from '@/components/pages/order/Main/MainRightSide/Admin/AdminTabs'
import { useOrderContext } from '@/context/OrderContext'
import { fadeInFromBottom } from '@/theme/animations'
import { theme } from '@/theme/theme'
import styled from 'styled-components'

export default function Admin() {
  const { isCollapsed } = useOrderContext()

  return (
    <AdminStyled>
      <AdminTabs />
      {!isCollapsed && <AdminPanel />}
    </AdminStyled>
  )
}

const AdminStyled = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  right: 0;

  animation: ${fadeInFromBottom} ease-out ${theme.animations.speed.slow};
`
