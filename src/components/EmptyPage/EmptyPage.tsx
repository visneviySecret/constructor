import React from 'react'
import { Drop } from '../../../public/assets/drop'
import { Container, Subtitle, Title, Wrapper } from './EmptyPage.style'

function EmptyPage() {
  return (
    <Container>
      <Wrapper>
        <Drop />
        <Title> Перетащите сюда</Title>
        <Subtitle> любой элемент из левой панели</Subtitle>
      </Wrapper>
    </Container>
  )
}

export default EmptyPage
