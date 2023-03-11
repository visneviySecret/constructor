import { ReactNode } from 'react'
import styled from 'styled-components'
import { AppStatus } from '@/utils/types'

interface IProps {
  children: ReactNode
  isDisabled?: boolean
}

export const Container = styled.div<{ isDisabled?: boolean }>`
  z-index: 0;
  max-width: 240px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 4px;
  opacity: ${({ isDisabled }) => isDisabled && '50%'};

  transition: opacity;
`

export const Paper = ({ children }: IProps) => {
  return <Container>{children}</Container>
}
