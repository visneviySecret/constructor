import {
  CalcAction,
  divisionCalc,
  minusCalc,
  multiplyCalc,
  plusCalc,
} from '@/redux/calcSlice'
import { Button } from '@/UI/Button/Button'
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 8px;
`

function FuncPad() {
  const dispatch = useDispatch()

  const handleClick = (value: CalcAction) => {
    if (value === CalcAction.division) {
      dispatch(divisionCalc())
    }
    if (value === CalcAction.multiply) {
      dispatch(multiplyCalc())
    }
    if (value === CalcAction.minus) {
      dispatch(minusCalc())
    }
    if (value === CalcAction.plus) {
      dispatch(plusCalc())
    }
  }

  return (
    <Container>
      <Button onClick={() => handleClick(CalcAction.division)}>/</Button>
      <Button onClick={() => handleClick(CalcAction.multiply)}>x</Button>
      <Button onClick={() => handleClick(CalcAction.minus)}>-</Button>
      <Button onClick={() => handleClick(CalcAction.plus)}>+</Button>
    </Container>
  )
}

export default FuncPad
