import { Paper } from '@/Layout/Paper'
import { Button } from '@/UI/Button/Button'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 8px;
`

function FuncPad() {
  return (
    <Paper>
      <Container>
        <Button>/</Button>
        <Button>x</Button>
        <Button>-</Button>
        <Button>+</Button>
      </Container>
    </Paper>
  )
}

export default FuncPad
