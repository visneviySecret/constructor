import { ReactNode } from 'react'
import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 240px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`

export const Paper = ({ children }: { children: ReactNode }) => {
  return <Wrapper>{children}</Wrapper>
}
