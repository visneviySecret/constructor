import React from 'react'
import { Display } from '../Display/Display'
import Equal from '../Equal/Equal'
import FuncPad from '../FuncPad/FuncPad'
import NumPad from '../NumPad/NumPad'
import { Container } from './Constructor.style'

interface IProps {
  value?: number
}

function Constructor({ value }: IProps) {
  return (
    <Container>
      <Display />
      <FuncPad />
      <NumPad />
      <Equal />
    </Container>
  )
}

export default Constructor
