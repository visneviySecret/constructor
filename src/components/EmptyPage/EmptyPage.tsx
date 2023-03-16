import React, { DragEvent, useState } from 'react'
import { AppStatus, BlockIDs } from '@/utils/types'
import { Drop } from '../../../public/assets/drop'
import { Container, Subtitle, Title, Wrapper } from './EmptyPage.style'
import { Draggable } from '@/utils/Draggable/Draggable'

function EmptyPage({ status }: { status: AppStatus }) {
  const [isHovered, setIsHoverd] = useState(false)

  const handleLeave = () => {
    setIsHoverd(false)
  }
  const handleOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsHoverd(true)
  }
  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsHoverd(false)
  }

  return (
    <Container
      isHovered={isHovered}
      onDragLeave={handleLeave}
      onDragOver={handleOver}
      onDrop={handleDrop}
    >
      <Draggable id={BlockIDs.buildPage} isDraggable={false} status={status}>
        <Wrapper>
          <Drop />
          <Title> Перетащите сюда</Title>
          <Subtitle> любой элемент из левой панели</Subtitle>
        </Wrapper>
      </Draggable>
    </Container>
  )
}

export default EmptyPage
