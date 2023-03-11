import React, { useState } from 'react'
import EmptyPage from '../EmptyPage/EmptyPage'
import { Container } from './Runtime.style'

function Runtime() {
  const [state, setState] = useState([])

  if (!state.length) return <EmptyPage />

  return <Container>{state}</Container>
}

export default Runtime
