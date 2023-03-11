import React, { ReactNode } from 'react'
import { ButtonComponent } from './Button.style'

interface IProps {
  children: ReactNode
  onClick: () => void
  isBackground?: boolean
}

const Button = ({ children, isBackground, onClick }: IProps) => {
  return (
    <ButtonComponent onClick={onClick} isBackground={isBackground}>
      {children}
    </ButtonComponent>
  )
}

export { Button }
