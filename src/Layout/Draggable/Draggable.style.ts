import styled from 'styled-components'

export const Container = styled.div<{
  isDisabled?: boolean
  draggable?: boolean
}>`
  width: 100%;
  height: 100%;
  opacity: ${({ isDisabled }) => isDisabled && '50%'};
  cursor: ${({ draggable }) => draggable && 'move'};

  transition: opacity;
`
