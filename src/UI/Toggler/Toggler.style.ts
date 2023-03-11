import { Color } from '@/utils/const'
import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: 243px;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  background-color: ${Color.Background};
  border-radius: 6px;
`

export const Switch = styled.div<{ isActive: boolean }>`
  z-index: 2;
  position: absolute;
  top: 0;
  right: 0;
  translate: ${(props) => props.isActive && '-133px 0'};
  background-color: white;
  border: 1px solid ${Color.LightBorder};
  border-radius: 5px;
  width: ${(props) => (props.isActive ? ' 108px' : '133px')};
  height: 95%;
  margin: 1px;

  transition: translate 0.5s, width 0.5s;
`
