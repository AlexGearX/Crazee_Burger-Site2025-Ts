import Admin from '@/components/pages/order/Main/MainRightSide/Admin/Admin'
import Menu from '@/components/pages/order/Main/MainRightSide/Menu/Menu'
import { useOrderContext } from '@/context/OrderContext'
import { theme } from '@/theme/theme'
import { useEffect } from 'react'
import styled from 'styled-components'

export default function MainRightSide() {
  const { isModeAdmin, setIsModeAdmin, isCollapsed, setIsCollapsed } = useOrderContext()

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'i') handleToggleAdmin()
      if (event.key === 'j') handleTogglePannel()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isModeAdmin, isCollapsed])

  const handleToggleAdmin = () => {
    setIsModeAdmin(!isModeAdmin)
  }

  const handleTogglePannel = () => {
    if (!isModeAdmin) setIsModeAdmin(true)
    setIsCollapsed(!isCollapsed)
  }

  return (
    <MainRightSideStyled>
      <Menu />
      {isModeAdmin && <Admin />}
    </MainRightSideStyled>
  )
}

const MainRightSideStyled = styled.div`
  position: relative;
  overflow-y: hidden;
  display: grid;
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
`
