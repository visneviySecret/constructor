import { selectCalcState } from '@/redux/calcSlice'
import { selectStatusState } from '@/redux/statusSlice'
import { AppStatus } from '@/utils/types'
import { useSelector } from 'react-redux'
import { Content, Wrapper } from './Display.style'

export const Display = () => {
  const value = useSelector(selectCalcState)
  const status = useSelector(selectStatusState)

  const getCorrectValue = (value: string) => {
    if (value == 'NaN' || Number(value) === Infinity || value === undefined)
      return 'Не определено'
    return value
  }

  return (
    <Wrapper>
      <Content>
        {status === AppStatus.constructor ? 0 : getCorrectValue(value)}
      </Content>
    </Wrapper>
  )
}
