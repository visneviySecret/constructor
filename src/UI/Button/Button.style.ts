import { Color } from '@/utils/const'
import styled from 'styled-components'

export const ButtonComponent = styled.button<{
  isActive?: boolean
  isBackground?: boolean
}>`
  width: 100%;
  min-width: 48px;
  padding: 1rem 1.3rem;
  height: 100%;

  background: ${(props) => (props.isBackground ? Color.Primal : '#ffffff')};
  border: 2px solid ${Color.LightBorder};
  border-radius: 6px;

  cursor: ${({ isActive }) => (isActive ? 'pointer' : 'move')};

  &:hover {
    border-color: ${({ isActive }) => isActive && Color.Primal};
  }
`
