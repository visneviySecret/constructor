import React from 'react'
import { ReactNode } from 'react'
import { AppStatus, BlockIDs } from '@/utils/types'
import { Container } from './Draggable.style'
import { HoverLine } from '@/UI/HoverLine/HoverLine'
import { useDraggable } from './utils'

interface IProps {
  children: ReactNode
  id: BlockIDs
  isDraggable: boolean
  status: AppStatus
  setIsHoverBuild?: (value: boolean) => void
  setIsHoverTopBuild?: (value: boolean) => void
  isDisabled?: boolean
}

function Draggable({
  children,
  id,
  isDraggable,
  status,
  setIsHoverBuild,
  setIsHoverTopBuild,
  isDisabled,
}: IProps) {
  const {
    isHoverItem,
    handleDoubleClick,
    handleLeave,
    handleStart,
    handleOver,
    handleDrop,
  } = useDraggable(id, status, setIsHoverBuild, setIsHoverTopBuild)

  return (
    <Container
      status={status}
      isDisabled={isDisabled}
      draggable={isDraggable}
      onClick={(e) => handleDoubleClick(e, id)}
      onDragStart={() => handleStart(id)}
      onDragLeave={handleLeave}
      onDragOver={handleOver}
      onDrop={(e) => handleDrop(e, id)}
    >
      {children}
      {isHoverItem && <HoverLine />}
    </Container>
  )
}

export { Draggable }
