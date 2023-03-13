import React, { ReactNode } from 'react'
import CSS from 'csstype'
import { ButtonComponent } from './Button.style'
import { useSelector } from 'react-redux'
import { selectStatusState } from '@/redux/statusSlice'
import { AppStatus } from '@/utils/types'

interface IProps {
  children: ReactNode
  onClick?: () => void
  isBackground?: boolean
  style?: CSS.Properties
}

const Button = ({ children, isBackground, onClick, style }: IProps) => {
  const status = useSelector(selectStatusState)
  const isActive = status === AppStatus.runtime

  return (
    <ButtonComponent
      onClick={onClick}
      isBackground={isBackground}
      style={style}
      isActive={isActive}
    >
      {children}
    </ButtonComponent>
  )
}

export { Button }
