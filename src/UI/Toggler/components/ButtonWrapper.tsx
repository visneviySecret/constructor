import React from 'react'
import { ButtonsWrapper } from '../Toggler.style'
import { Eye, EyeActive } from '../../../../public/assets/eye'
import { Brace, BraceActive } from '../../../../public/assets/braces'
import TogglerButton from './TogglerButton'
import { AppStatus } from '@/utils/types'

interface IProps {
  status: AppStatus
}

const ButtonWrapper = ({ status }: IProps) => {
  return (
    <ButtonsWrapper>
      <TogglerButton
        icon={status === AppStatus.runtime ? <EyeActive /> : <Eye />}
      >
        Runtime
      </TogglerButton>
      <TogglerButton
        icon={status === AppStatus.constructor ? <BraceActive /> : <Brace />}
      >
        Constructor
      </TogglerButton>
    </ButtonsWrapper>
  )
}

export default ButtonWrapper
