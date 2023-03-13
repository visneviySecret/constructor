import { createSlice } from '@reduxjs/toolkit'
import { AppState } from './store'
import { AppStatus, BlockIDs } from '@/utils/types'

export interface BlockState {
  blockState: {
    id: BlockIDs | null
    status: AppStatus | null
  }
}

const initialState: BlockState = {
  blockState: { id: null, status: null },
}

export const blockSlice = createSlice({
  name: 'block',
  initialState,
  reducers: {
    setBlockState(state, action) {
      state.blockState = action.payload
    },
  },
})

export const { setBlockState } = blockSlice.actions

export const selectBlockState = (state: AppState) => state.block.blockState

export default blockSlice.reducer
