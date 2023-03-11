import React, { ReactNode } from 'react'
import CSS from 'csstype'
import { ButtonComponent } from './Button.style'

interface IProps {
  children: ReactNode
  onClick?: () => void
  isBackground?: boolean
  style?: CSS.Properties
}

const Button = ({ children, isBackground, onClick, style }: IProps) => {
  return (
    <ButtonComponent
      onClick={onClick}
      isBackground={isBackground}
      style={style}
    >
      {children}
    </ButtonComponent>
  )
}

export { Button }
