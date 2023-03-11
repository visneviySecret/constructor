import { Color } from '@/utils/const'
import styled from 'styled-components'

export const ButtonComponent = styled.button<{ isBackground?: boolean }>`
  min-width: 3.25rem;
  padding: 1rem;
  height: 100%;

  background: ${(props) => (props.isBackground ? Color.Primal : '#ffffff')};
  border: 2px solid ${Color.LightBorder};
  border-radius: 6px;

  &:hover {
    border-color: ${Color.Primal};
  }
`
