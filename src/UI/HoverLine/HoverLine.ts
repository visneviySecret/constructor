import styled from 'styled-components'
import { Color } from '@/utils/const'

export const HoverLine = styled.span`
  content: '';
  position: absolute;
  bottom: -8px;
  left: -6px;
  width: calc(100% + 12px);
  height: 1px;
  background-color: ${Color.Primal};

  &::before {
    content: '';
    position: absolute;
    bottom: -2px;
    background-color: ${Color.Primal};
    width: 5px;
    height: 5px;
    rotate: 45deg;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    right: 0;
    background-color: ${Color.Primal};
    width: 5px;
    height: 5px;
    rotate: 45deg;
  }
`
export const TopHoverLine = styled.span`
  content: '';
  position: absolute;
  top: -8px;
  left: -6px;
  width: calc(100% + 12px);
  height: 1px;
  background-color: ${Color.Primal};

  &::before {
    content: '';
    position: absolute;
    bottom: -2px;
    background-color: ${Color.Primal};
    width: 5px;
    height: 5px;
    rotate: 45deg;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    right: 0;
    background-color: ${Color.Primal};
    width: 5px;
    height: 5px;
    rotate: 45deg;
  }
`
