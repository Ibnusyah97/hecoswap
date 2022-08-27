import React from 'react';
import {ButtonProps, useWalletModal} from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import useAuth from 'hooks/useAuth'
import styled from 'styled-components'

const Button = styled.div<any>`
  background-image: linear-gradient(to right, #5a7cb2 0%, #1d5891  51%, #193b70  100%);
  margin: 0px;
  margin-top: 20px;
  padding: 15px 45px;
  text-align: center;
  font-weight: 500;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;            
  box-shadow: 0 0 10px #eee;
  border-radius: 10px;
  display: block;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`
const UnlockButton: React.FC<ButtonProps> = (props) => {
  const TranslateString = useI18n()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)

  return (
    <Button onClick={onPresentConnectModal} {...props}>
      {TranslateString(292, 'Connect Wallet')}
    </Button>
  )
}

export default UnlockButton
