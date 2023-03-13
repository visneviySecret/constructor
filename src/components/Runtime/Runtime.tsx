import React, { useState } from 'react'
import EmptyPage from '../EmptyPage/EmptyPage'
import { Container, DraggablePlace, Wrapper } from './Runtime.style'
import { AppStatus, CalcBlocks } from '@/utils/types'
import { Draggable } from '@/Layout/Draggable/Draggable'
import { selectStatusState } from '@/redux/statusSlice'
import { useSelector } from 'react-redux'
import { selectBuildState } from '@/redux/buildSlice'
import { BlockIDs } from '@/utils/types'
import { HoverLine, TopHoverLine } from '@/UI/HoverLine/HoverLine'

interface IProps {
  value?: number
}

function Runtime({}: IProps) {
  const statusState = useSelector(selectStatusState)
  const buildState: CalcBlocks[] = useSelector(selectBuildState)
  const isDraggable = statusState === AppStatus.constructor
  const [isHoverBuild, setIsHoverBuild] = useState(false)
  const [isHoverTopBuild, setIsHoverTopBuild] = useState(false)

  if (statusState !== AppStatus.runtime && buildState.length === 0)
    return <EmptyPage />

  return (
    <Container>
      <Wrapper>
        {buildState.map((item, index) => (
          <Draggable
            key={item.id}
            id={item.id}
            isDraggable={isDraggable && item.id !== BlockIDs.display}
            status={AppStatus.runtime}
            setIsHoverTopBuild={setIsHoverTopBuild}
            setIsHoverBuild={setIsHoverBuild}
          >
            {isHoverTopBuild && index === 0 && <TopHoverLine />}
            {item.node}
            {isHoverBuild && index + 1 === buildState.length && <HoverLine />}
          </Draggable>
        ))}
      </Wrapper>
      <Draggable
        id={BlockIDs.buildPage}
        isDraggable={false}
        status={AppStatus.runtime}
        setIsHoverBuild={setIsHoverBuild}
        setIsHoverTopBuild={setIsHoverTopBuild}
      >
        <DraggablePlace />
      </Draggable>
    </Container>
  )
}

export default Runtime
