import { AppStatus } from '@/utils/types'
import styled from 'styled-components'

export const Container = styled.div<{
  status: AppStatus
  isDisabled?: boolean
  draggable?: boolean
  isHovered?: boolean
}>`
  position: relative;
  width: 100%;
  height: 100%;
  opacity: ${({ isDisabled }) => isDisabled && '50%'};
  cursor: ${({ draggable }) => draggable && 'move'};

  ${({ status }) =>
    status === AppStatus.constructor &&
    '  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);'}
  border-radius: 4px;
  padding: 4px;
  transition: opacity 0.4s;
`
