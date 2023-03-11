import React from 'react'
import { Paper } from '@/Layout/Paper'
import { Button } from '@/UI/Button/Button'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: 1fr 1fr 1fr;
  gap: 8px;
`

const GridSpan = styled.div`
  grid-column: span 2;
`

function NumPad() {
  return (
    <Paper>
      <Container>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <GridSpan>
          <Button>0</Button>
        </GridSpan>
        <Button>,</Button>
      </Container>
    </Paper>
  )
}

export default NumPad
