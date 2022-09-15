import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { doubleSpaceCheck } from '../../utils/doubleSpaceCheck'
import { fetchText } from './textAction'

interface ITextState {
  text: string[]
  error: string | null
  numberOfSymbol: number
  incorrectSymbol: null | number
  totalAttemptCounter: number
}

const initialState: ITextState = {
  text: [],
  error: null,
  numberOfSymbol: 0,
  incorrectSymbol: null,
  totalAttemptCounter: 0,
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
  },
  extraReducers: {
    [fetchText.pending.type]: (state) => {
      state.error = null
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
} = textSlice.actions
