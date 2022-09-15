import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { doubleSpaceCheck } from '../../utils/doubleSpaceCheck'
import { fetchText } from './textAction'

interface ITextState {
  text: String[]
  error: string | null
}

const initialState: ITextState = {
  text: [],
  error: null,
}

export const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {},
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
