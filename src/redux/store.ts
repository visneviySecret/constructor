import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { statusSlice } from './statusSlice'
import { blockSlice } from './blockSlice'
import { buildSlice } from './buildSlice'
import { createWrapper } from 'next-redux-wrapper'

const makeStore = () =>
  configureStore({
    reducer: {
      [statusSlice.name]: statusSlice.reducer,
      [blockSlice.name]: blockSlice.reducer,
      [buildSlice.name]: buildSlice.reducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  })

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>

export const wrapper = createWrapper<AppStore>(makeStore)
