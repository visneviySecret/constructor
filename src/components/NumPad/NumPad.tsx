import React from 'react'
import { Button } from '@/UI/Button/Button'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { selectCalcState, updateCalc } from '@/redux/calcSlice'
import { selectStatusState } from '@/redux/statusSlice'
import { AppStatus } from '@/utils/types'

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
  const state: string = useSelector(selectCalcState).toString()
  const status = useSelector(selectStatusState)
  const dispatch = useDispatch()

  const handleClick = (value: string) => {
    if (status === AppStatus.constructor) return
    const newNumber = getCorrectNumber(value)

    dispatch(updateCalc(newNumber))
  }

  const getCorrectNumber = (value: string) => {
    if (value === '.' && state.indexOf('.') !== -1) return state
    if (state === '0' && value === '0') return state + '.0'
    if (state === '0' && value !== '.') return value
    if (state == 'NaN' && value !== '.') return value
    if (state.length > 12) return Number(state.slice(1) + value).toFixed(11)
    return state + value
  }

  return (
    <Container>
      <Button onClick={() => handleClick('7')}>7</Button>
      <Button onClick={() => handleClick('8')}>8</Button>
      <Button onClick={() => handleClick('9')}>9</Button>
      <Button onClick={() => handleClick('4')}>4</Button>
      <Button onClick={() => handleClick('5')}>5</Button>
      <Button onClick={() => handleClick('6')}>6</Button>
      <Button onClick={() => handleClick('1')}>1</Button>
      <Button onClick={() => handleClick('2')}>2</Button>
      <Button onClick={() => handleClick('3')}>3</Button>
      <GridSpan>
        <Button onClick={() => handleClick('0')}>0</Button>
      </GridSpan>
      <Button onClick={() => handleClick('.')}>,</Button>
    </Container>
  )
}

export default NumPad
