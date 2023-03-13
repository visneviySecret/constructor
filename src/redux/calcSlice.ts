import { createSlice } from '@reduxjs/toolkit'
import { AppState } from './store'

export const enum CalcAction {
  division = 'Division',
  multiply = 'Multiply',
  minus = 'Minus',
  plus = 'Plus',
  equal = 'Equal',
}

export interface CalcState {
  calcState: string
  calcDisplayState: string
  action: CalcAction | null
}

const initialState: CalcState = {
  calcState: '0',
  calcDisplayState: '0',
  action: null,
}

export const calcSlice = createSlice({
  name: 'calc',
  initialState,
  reducers: {
    updateCalc(state, action) {
      state.calcDisplayState = action.payload
    },
    divisionCalc(state) {
      state.action = CalcAction.division
      state.calcState = state.calcDisplayState
      state.calcDisplayState = '0'
    },
    multiplyCalc(state) {
      state.action = CalcAction.multiply
      state.calcState = state.calcDisplayState
      state.calcDisplayState = '0'
    },
    minusCalc(state) {
      state.action = CalcAction.minus
      state.calcState = state.calcDisplayState
      state.calcDisplayState = '0'
    },
    plusCalc(state) {
      state.action = CalcAction.plus
      state.calcState = state.calcDisplayState
      state.calcDisplayState = '0'
    },
    equalCalc(state) {
      console.log('state.action', state.action)
      switch (state.action) {
        case CalcAction.division: {
          const newState =
            Number(state.calcState) / Number(state.calcDisplayState)
          state.calcDisplayState = newState.toString()
          state.action = null
          break
        }

        case CalcAction.multiply: {
          const newState =
            Number(state.calcState) * Number(state.calcDisplayState)
          state.calcDisplayState = newState.toString()
          state.action = null
          break
        }
        case CalcAction.minus: {
          const newState =
            Number(state.calcState) - Number(state.calcDisplayState)
          state.calcDisplayState = newState.toString()
          state.action = null
          break
        }
        case CalcAction.plus: {
          const newState =
            Number(state.calcState) + Number(state.calcDisplayState)
          state.calcDisplayState = newState.toString()
          state.action = null
          break
        }
      }
    },
  },
})

export const {
  updateCalc,
  divisionCalc,
  multiplyCalc,
  minusCalc,
  equalCalc,
  plusCalc,
} = calcSlice.actions

export const selectCalcState = (state: AppState) => state.calc.calcDisplayState

export default calcSlice.reducer
