import { Color } from '@/utils/const'
import styled from 'styled-components'

export const Container = styled.div<{ isHovered?: boolean }>`
  position: relative;
  width: 100%;
  max-width: 243px;
  border: 2px dashed ${Color.DashedBorder};
  border-radius: 6px;

  background-color: ${({ isHovered }) => isHovered && Color.LightBlue50};
`
export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 127px;
`

export const Title = styled.span`
  line-height: 17px;
  text-align: center;
  color: ${Color.Primal};
  margin-top: 12px;
  margin-bottom: 4px;
`

export const Subtitle = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: center;

  color: ${Color.Text};
`
