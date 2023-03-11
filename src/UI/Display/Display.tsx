import { Content, Wrapper } from './Display.style'

export const Dipslay = ({ value }: { value: number }) => {
  return (
    <Wrapper>
      <Content>{value}</Content>
    </Wrapper>
  )
}
