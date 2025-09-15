import { getTabsConfig } from '@/components/pages/order/Main/MainRightSide/Admin/tabsConfig'
import Tab from '@/components/reusable-ui/Tab'
import { ADMIN_TAB_LABEL } from '@/constants/tab'
import { useOrderContext } from '@/context/OrderContext'
import { theme } from '@/theme/theme'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import styled from 'styled-components'

export default function AdminTabs() {
  // state
  const { isCollapsed, setIsCollapsed, currentTabSelected, setCurrentTabSelected } = useOrderContext()

  // comportements
  const selectTab = (tabSelected: ADMIN_TAB_LABEL) => {
    setIsCollapsed(false) // tu m'ouvres le pannel
    setCurrentTabSelected(tabSelected)
  }

  const tabs = getTabsConfig()

  // affichage
  return (
    <AdminTabsStyled>
      <Tab
        index={ADMIN_TAB_LABEL.CHEVRON}
        label=""
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? 'is-active' : ''}
      />
      {tabs.map((tab) => (
        <Tab
          key={tab.index}
          index={tab.index}
          label={tab.label}
          Icon={tab.Icon}
          onClick={() => selectTab(tab.index)}
          className={currentTabSelected === tab.index ? 'is-active' : ''}
        />
      ))}
    </AdminTabsStyled>
  )
}

const AdminTabsStyled = styled.div`
  display: flex;
  position: absolute;
  top: -43px;
  left: 5%;

  .is-active {
    background: ${theme.colors.background_dark};
    border-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
  }

  button {
    margin-left: 1px;
  }
`
