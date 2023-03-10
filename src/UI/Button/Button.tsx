import React, { ReactNode } from 'react'
import { ButtonComponent } from './Button.style'

interface IProps {
  children: ReactNode
}

const Button = ({ children }: IProps) => {
  return <ButtonComponent>{children}</ButtonComponent>
}

export { Button }
