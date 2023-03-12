import React from 'react'
import { Draggable } from '@/Layout/Draggable/Draggable'
import { selectStatusState } from '@/redux/statusSlice'
import { AppStatus } from '@/utils/types'
import { useSelector } from 'react-redux'
import { Container } from './Constructor.style'
import { Blocks } from '../Blocks/Block'

function Constructor() {
  const statusState = useSelector(selectStatusState)
  const isDraggable = statusState === AppStatus.constructor

  return (
    <Container>
      {Blocks.map((item) => (
        <Draggable key={item.id} id={item.id} isDraggable={isDraggable}>
          {item.node}
        </Draggable>
      ))}
    </Container>
  )
}

export default Constructor
