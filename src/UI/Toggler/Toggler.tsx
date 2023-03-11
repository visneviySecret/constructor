import React from 'react'
import { Switch, Wrapper } from './Toggler.style'
import { AppStatus } from '@/utils/types'
import ButtonWrapper from './components/ButtonWrapper'
import { selectStatusState } from '@/redux/slice'
import { useSelector } from 'react-redux'

interface IProps {
  onClick: () => void
}

const Toggler = ({ onClick }: IProps) => {
  const statusState = useSelector(selectStatusState)

  return (
    <Wrapper onClick={onClick}>
      <ButtonWrapper status={statusState} />
      <Switch isActive={statusState === AppStatus.runtime} />
    </Wrapper>
  )
}

export default Toggler
