import React from 'react'
import EmptyPage from '../EmptyPage/EmptyPage'
import { Container, Wrapper } from './Runtime.style'
import { AppStatus, CalcBlocks } from '@/utils/types'
import { Draggable } from '@/Layout/Draggable/Draggable'
import { selectStatusState } from '@/redux/statusSlice'
import { useSelector } from 'react-redux'
import { selectBuildState } from '@/redux/buildSlice'
import { BlockIDs } from '@/utils/types'

interface IProps {
  value?: number
}

function Runtime({}: IProps) {
  const statusState = useSelector(selectStatusState)
  const buildState: CalcBlocks[] = useSelector(selectBuildState)
  const isDraggable = statusState === AppStatus.constructor

  if (statusState !== AppStatus.runtime && buildState.length === 0)
    return <EmptyPage />

  return (
    <Container>
      <Draggable id={BlockIDs.buildPage} isDraggable={false}>
        <Wrapper>
          {buildState.map((item) => (
            <Draggable key={item.id} id={item.id} isDraggable={isDraggable}>
              {item.node}
            </Draggable>
          ))}
        </Wrapper>
      </Draggable>
    </Container>
  )
}

export default Runtime
