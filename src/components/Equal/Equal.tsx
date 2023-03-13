import { equalCalc } from '@/redux/calcSlice'
import { Button } from '@/UI/Button/Button'
import { Color } from '@/utils/const'
import React from 'react'
import { useDispatch } from 'react-redux'

const style = {
  border: 'none',
  background: Color.Primal,
  color: 'white',
}

function Equal() {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(equalCalc())
  }

  return (
    <Button onClick={handleClick} style={style}>
      =
    </Button>
  )
}

export default Equal
