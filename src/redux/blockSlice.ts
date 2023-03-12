import { createSlice } from '@reduxjs/toolkit'
import { AppState } from './store'
import { BlockIDs } from '@/utils/types'

export interface BlockState {
  blockState: BlockIDs | null
}

const initialState: BlockState = {
  blockState: null,
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
