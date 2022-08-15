import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'

const StyledNav = styled.div`
  margin-bottom: 40px;
  background-color: transparent;
`

function Nav({ activeIndex = 0 }: { activeIndex?: number }) {
  const TranslateString = useI18n()
  return (
    <StyledNav>
      <ButtonMenu activeIndex={activeIndex} scale="sm" variant="subtle">
        <ButtonMenuItem id="swap-nav-link" to="/swap" as={Link}>
          {TranslateString(1142, 'HecoSwap')}
        </ButtonMenuItem>
        <ButtonMenuItem id="pool-nav-link" to="/pool" as={Link}>
          {TranslateString(262, 'HecoPool')}
        </ButtonMenuItem>
      </ButtonMenu>
    </StyledNav>
  )
}

export default Nav
