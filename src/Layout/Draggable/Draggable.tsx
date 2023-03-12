import React from 'react'
import { ReactNode } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectStatusState } from '@/redux/statusSlice'
import { AppStatus, BlockIDs } from '@/utils/types'
import { Container } from './Draggable.style'
import { Blocks } from '../../components/Blocks/Block'
import { selectBlockState, setBlockState } from '@/redux/blockSlice'
import { addBlockToBuild, removeBlockFromBuild } from '@/redux/buildSlice'

interface IProps {
  children: ReactNode
  id: BlockIDs
  isDraggable?: boolean
}

function Draggable({ children, id, isDraggable }: IProps) {
  const statusState = useSelector(selectStatusState)
  const blockState = useSelector(selectBlockState)
  const dispatch = useDispatch()

  const isDisabled = statusState === AppStatus.runtime

  const handleDoubleClick = (event, id) => {
    if (event.detail === 2 && id !== BlockIDs.buildPage) {
      dispatch(removeBlockFromBuild(id))
    }
  }

  const handleStart = (id: BlockIDs) => {
    dispatch(setBlockState(id))
  }

  const handleLeave = (event) => {
    return
  }
  const handleOver = (event) => {
    event.preventDefault()
  }
  const handleDrop = (event, id: BlockIDs) => {
    event.preventDefault()
    if (id === BlockIDs.buildPage && blockState) addBlockToRuntime(blockState)
    dispatch(setBlockState(null))
  }

  const addBlockToRuntime = (blockId: BlockIDs) => {
    const block = Blocks.filter((block) => block.id === blockId)
    dispatch(addBlockToBuild(block))
  }

  return (
    <Container
      isDisabled={isDisabled}
      draggable={isDraggable}
      onClick={(e) => handleDoubleClick(e, id)}
      onDragStart={() => handleStart(id)}
      onDragLeave={handleLeave}
      onDragOver={handleOver}
      onDrop={(e) => handleDrop(e, id)}
    >
      {children}
    </Container>
  )
}

export { Draggable }
