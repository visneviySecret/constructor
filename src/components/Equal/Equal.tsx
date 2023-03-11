import { Paper } from '@/Layout/Paper'
import { Button } from '@/UI/Button/Button'
import { Color } from '@/utils/const'
import React from 'react'

const style = {
  border: 'none',
  background: Color.Primal,
  color: 'white',
}

function Equal() {
  return (
    <Paper>
      <Button style={style}>=</Button>
    </Paper>
  )
}

export default Equal
