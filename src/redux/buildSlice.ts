import { createSlice } from '@reduxjs/toolkit'
import { AppState } from './store'
import { CalcBlocks } from '@/utils/types'

export interface BuildState {
  buildState: CalcBlocks[] | []
}

const initialState: BuildState = {
  buildState: [],
}

export const buildSlice = createSlice({
  name: 'build',
  initialState,
  reducers: {
    removeBlockFromBuild(state, action) {
      const newBuild = state.buildState.filter(
        (item) => item.id !== action.payload
      )
      state.buildState = newBuild
    },
    updateBuild(state, action) {
      state.buildState = action.payload
    },
  },
})

export const { removeBlockFromBuild, updateBuild } = buildSlice.actions

export const selectBuildState = (state: AppState) => state.build.buildState

export default buildSlice.reducer
