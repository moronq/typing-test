import { createAsyncThunk } from '@reduxjs/toolkit'
import { textAPI } from '../../api/api'

export const fetchText = createAsyncThunk(
  'text/fetchText',
  async (_, thunkAPI) => {
    try {
      const response = await textAPI.getText()
      if (response.status === 200) {
        return response.data[0]
      } else {
        return thunkAPI.rejectWithValue('Bad Status')
      }
    } catch (e) {
      alert('ошибка при поучении текста')
    }
  }
)
