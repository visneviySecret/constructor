import React, { useState } from 'react'
import { BlockIDs } from '@/utils/types'
import { Drop } from '../../../public/assets/drop'
import { Container, Subtitle, Title, Wrapper } from './EmptyPage.style'
import { Draggable } from '@/Layout/Draggable/Draggable'

function EmptyPage() {
  const [isHovered, setIsHoverd] = useState(false)

  const handleLeave = (event) => {
    setIsHoverd(false)
  }
  const handleOver = (event) => {
    event.preventDefault()
    setIsHoverd(true)
  }
  const handleDrop = (event) => {
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
      <Draggable id={BlockIDs.buildPage} isDraggable={false}>
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
