import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { doubleSpaceCheck } from '../../utils/doubleSpaceCheck'
import { fetchText } from './textAction'

interface ITextState {
  reloaded: boolean
  text: string[]
  error: string | null
  numberOfSymbol: number
  incorrectSymbol: null | number
  totalAttemptCounter: number
  speed: null | number
  accuracy: null | number
}

const initialState: ITextState = {
  reloaded: true,
  text: [],
  error: null,
  numberOfSymbol: 0,
  incorrectSymbol: null,
  totalAttemptCounter: 0,
  speed: null,
  accuracy: null,
}

export const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    incrementNumberOfSymbol: (state) => {
      state.numberOfSymbol++
    },
    setIncorrectSymbol: (state, action: PayloadAction<number | null>) => {
      state.incorrectSymbol = action.payload
    },
    setTotalAttemptCounter: (state) => {
      state.totalAttemptCounter++
    },
    restart: (state) => {
      state.reloaded = true
      state.text = []
      state.error = null
      state.incorrectSymbol = null
      state.numberOfSymbol = 0
      state.totalAttemptCounter = 0
      state.speed = null
      state.accuracy = null
    },
    setSpeed: (state, action: PayloadAction<number>) => {
      state.speed = action.payload
    },
    setAccuracy: (state, action: PayloadAction<number>) => {
      state.accuracy = action.payload
    },
  },
  extraReducers: {
    [fetchText.pending.type]: (state) => {
      state.error = null
      state.reloaded = false
    },
    [fetchText.fulfilled.type]: (state, action: PayloadAction<string>) => {
      state.text = doubleSpaceCheck(action.payload.split(''))
    },
    [fetchText.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
  },
})

export default textSlice.reducer
export const {
  incrementNumberOfSymbol,
  setIncorrectSymbol,
  setTotalAttemptCounter,
  restart,
  setSpeed,
  setAccuracy,
} = textSlice.actions
