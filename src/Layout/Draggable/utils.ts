import { Blocks } from '@/components/Blocks/Blocks'
import { selectBlockState, setBlockState } from '@/redux/blockSlice'
import {
  removeBlockFromBuild,
  selectBuildState,
  updateBuild,
} from '@/redux/buildSlice'
import { selectStatusState } from '@/redux/statusSlice'
import { AppStatus, BlockIDs, CalcBlocks } from '@/utils/types'
import { DragEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export function useDraggable(
  id: BlockIDs,
  status: AppStatus,
  setIsHoverBuild?: (value: boolean) => void,
  setIsHoverTopBuild?: (value: boolean) => void
) {
  const blockState = useSelector(selectBlockState)
  const buildState = useSelector(selectBuildState)
  const statusState = useSelector(selectStatusState)
  const dispatch = useDispatch()
  const [isHoverItem, setIsHoverItem] = useState(false)

  const handleDoubleClick = (
    event: React.MouseEvent<HTMLElement>,
    id: BlockIDs
  ) => {
    if (
      event.detail === 2 &&
      id !== BlockIDs.buildPage &&
      statusState !== AppStatus.runtime
    ) {
      removeBlockById(id)
    }
  }

  const handleStart = (id: BlockIDs) => {
    dispatch(setBlockState({ id, status }))
  }

  const handleLeave = () => {
    manageHoverEffect()
  }

  const handleOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    manageHoverEffect(id, true)
  }

  const handleDrop = (event: DragEvent<HTMLDivElement>, id: BlockIDs) => {
    event.preventDefault()
    if (blockState.id) {
      blockState.status !== AppStatus.runtime
        ? addBlockToRuntime(blockState.id, id)
        : moveBlockToId(blockState.id, id)
    }
    dispatch(setBlockState(null))
    manageHoverEffect()
  }

  const manageHoverEffect = (id?: BlockIDs, isEventOver?: boolean) => {
    if (!setIsHoverBuild || !setIsHoverTopBuild) return
    if (blockState.id === BlockIDs.display && id) {
      setIsHoverTopBuild(true)
      return
    }
    if (id === BlockIDs.buildPage) {
      setIsHoverItem(false)
      setIsHoverBuild(true)
      return
    }
    if (isEventOver && status === AppStatus.runtime) {
      setIsHoverBuild(false)
      setIsHoverItem(true)
      return
    }
    setIsHoverTopBuild(false)
    setIsHoverItem(false)
    setIsHoverBuild(false)
  }

  const addBlockToRuntime = (blockId: BlockIDs, toId: BlockIDs) => {
    const block = getBlock(blockId)
    const sliceId =
      blockId === BlockIDs.display
        ? -2
        : buildState.findIndex((item) => item.id === toId)
    const correctId =
      sliceId === -1 ? buildState.length - 1 : sliceId === -2 ? -1 : sliceId

    setNewBuild(buildState, correctId, block[0])
  }

  const moveBlockToId = (fromId: BlockIDs, toId: BlockIDs) => {
    const block = getBlock(fromId)
    const sliceId = buildState.findIndex((item) => item.id === toId)
    const correctId = sliceId === -1 ? buildState.length - 1 : sliceId
    const newBuild = buildState.filter((item) => item.id !== fromId)

    setNewBuild(newBuild, correctId, block[0])
  }

  const removeBlockById = (id: BlockIDs) => {
    dispatch(removeBlockFromBuild(id))
  }

  const setNewBuild = (build: CalcBlocks[], id: number, block: CalcBlocks) => {
    const firstHalf = build.slice(0, id + 1)
    const secondHalf = build.slice(id + 1)
    const result = [...firstHalf, block, ...secondHalf]
    dispatch(updateBuild(result))
  }

  const getBlock = (id: BlockIDs) => Blocks.filter((block) => block.id === id)

  return {
    isHoverItem,
    handleDoubleClick,
    handleStart,
    handleLeave,
    handleOver,
    handleDrop,
  }
}
