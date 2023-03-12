import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface IProps {
  children: ReactNode
}

export const Container = styled.div`
  z-index: 0;
  max-width: 240px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 4px;
`

export const Paper = ({ children }: IProps) => {
  return <Container>{children}</Container>
}
