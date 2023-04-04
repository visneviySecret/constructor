import React from 'react'
import { Draggable } from '@/components/Draggable/Draggable'
import { selectStatusState } from '@/redux/statusSlice'
import { AppStatus } from '@/utils/types'
import { useSelector } from 'react-redux'
import { Container } from './Constructor.style'
import { Blocks } from '../Blocks/Blocks'
import { selectBuildState } from '@/redux/buildSlice'

function Constructor() {
  const statusState = useSelector(selectStatusState)
  const buildState = useSelector(selectBuildState)
  const isDraggable = statusState === AppStatus.constructor
  const isDisabled = statusState === AppStatus.runtime
  const isHide = statusState === AppStatus.runtime

  return (
    <Container>
      {Blocks.map((item) => {
        const isUsed =
          buildState.filter((buildItem) => buildItem.id === item.id).length !==
          0
        {
          return (
            !isHide && (
              <Draggable
                key={item.id}
                id={item.id}
                isDraggable={isDraggable && !isUsed}
                isDisabled={isDisabled || isUsed}
                status={AppStatus.constructor}
              >
                {item.node}
              </Draggable>
            )
          )
        }
      })}
    </Container>
  )
}

export default Constructor
