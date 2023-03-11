import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface IProps {
  children: ReactNode
  toRightSide?: boolean
}

const Wrapper = styled.section<{ toRightSide?: boolean }>`
  width: 100%;
  display: flex;
  justify-content: ${(props) =>
    (props.toRightSide && 'flex-end') || 'space-between'};
  margin-top: 2rem;
`
const Section = ({ children, toRightSide }: IProps) => {
  return <Wrapper toRightSide={toRightSide}>{children}</Wrapper>
}

export default Section
