import React, { useState } from 'react'
import { Item, Switch, Wrapper, IconWrapper } from './Toggler.style'
import { AppStatus } from '@/utils/types'
import ButtonWrapper from './components/ButtonWrapper'

interface IProps {
  onClick: () => void
  status: AppStatus
}

const Toggler = ({ onClick }: IProps) => {
  const [status, setStatus] = useState(AppStatus.runtime)

  const handleClick = () => {
    console.log(
      status === AppStatus.runtime ? AppStatus.constructor : AppStatus.runtime
    )
    setStatus((prev) =>
      prev === AppStatus.runtime ? AppStatus.constructor : AppStatus.runtime
    )
  }

  return (
    <Wrapper onClick={handleClick}>
      <ButtonWrapper status={status} />
      <Switch isActive={status === AppStatus.runtime} />
    </Wrapper>
  )
}

export default Toggler
