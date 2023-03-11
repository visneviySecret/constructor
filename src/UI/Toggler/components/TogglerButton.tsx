import { Color } from '@/utils/const'
import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface IProps {
  children: ReactNode
  icon: ReactNode
}

const IconWrapper = styled.div`
  max-height: 20px;
`

const Button = styled.div`
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.5rem 0.75rem;
  color: ${Color.DarkText};
`

const TogglerButton = ({ children, icon }: IProps) => {
  return (
    <Button>
      <IconWrapper>{icon}</IconWrapper>
      {children}
    </Button>
  )
}

export default TogglerButton
