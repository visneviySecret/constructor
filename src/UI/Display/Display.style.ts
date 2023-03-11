import { Color } from '@/utils/const'
import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  max-width: 240px;
  max-height: 52px;
  color: ${Color.Display};
  border-radius: 4px;
  padding: 0.25rem;
`

export const Content = styled.div`
  text-align: right;
  padding: 0.125rem 0.5rem;
  border-radius: 4px;
  background-color: ${Color.Background};

  font-weight: 800;
  font-size: 2.25rem;
  line-height: 2.75rem;
`
