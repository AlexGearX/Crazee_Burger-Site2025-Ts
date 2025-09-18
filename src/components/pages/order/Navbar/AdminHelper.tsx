import { theme } from '@/theme/theme'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

export function AdminHelper({ isModeAdmin }: { isModeAdmin: boolean }) {
  const [showAdminHelper, setShowAdminHelper] = useState(false)
  const adminHelper = localStorage.getItem('adminHelper')

  useEffect(() => {
    if (!isModeAdmin) {
      setShowAdminHelper(false)
      return
    }

    if (!adminHelper || adminHelper === 'true') {
      setShowAdminHelper(true)
    }
  }, [isModeAdmin, adminHelper])

  const handleHideAdminHelper = () => {
    localStorage.setItem('adminHelper', 'false')
    setShowAdminHelper(false)
  }

  return showAdminHelper ? (
    <AdminHelperStyled>
      <span>💡 Pour aller plus vite :</span>
      <ul>
        <li>⌘ + j : Toggle "mode" admin</li>
        <li>⌘ + j : Toggle "panel" admin</li>
      </ul>
      <button onClick={handleHideAdminHelper}>Ne plus afficher</button>
    </AdminHelperStyled>
  ) : null
}

const AdminHelperStyled = styled.div`
  position: absolute;
  z-index: 1000;
  top: 20px;
  left: 20px;
  width: 260px;
  background-color: ${theme.colors.dark};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  border-radius: ${theme.borderRadius.round};

  color: ${theme.colors.white};
  font-family: Open Sans;
  span {
    font-weight: ${theme.fonts.weights.bold};
    font-style: Bold;
    font-size: ${theme.fonts.size.P0};
    line-height: 100%;
    letter-spacing: 0%;
    vertical-align: middle;
    margin-top: 10px;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 5px;
    li {
      font-size: ${theme.fonts.size.P0};
      list-style: none;
    }
  }
  button {
    width: 100%;
    height: 40px;
    background-color: ${theme.colors.dark};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.white};
    border-radius: ${theme.borderRadius.extraRound};
    padding: 10px 20px;
  }
  button:hover {
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
  }
`
