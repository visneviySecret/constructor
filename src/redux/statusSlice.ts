import { createSlice } from '@reduxjs/toolkit'
import { AppState } from './store'
import { AppStatus } from '@/utils/types'

export interface StatusState {
  statusState: AppStatus
}

const initialState: StatusState = {
  statusState: AppStatus.constructor,
}

export const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    setStatusState(state, action) {
      state.statusState = action.payload
    },
  },
})

export const { setStatusState } = statusSlice.actions

export const selectStatusState = (state: AppState) => state.status.statusState

export default statusSlice.reducer
