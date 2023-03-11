import { Paper } from '@/Layout/Paper'
import { Content, Wrapper } from './Display.style'

interface IProps {
  value?: number
}

export const Display = ({ value = 0 }: IProps) => {
  return (
    <Paper>
      <Wrapper>
        <Content>{value}</Content>
      </Wrapper>
    </Paper>
  )
}
