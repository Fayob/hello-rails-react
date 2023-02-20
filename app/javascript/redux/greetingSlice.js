import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const message = createAsyncThunk('greeting/message', async (_, thunk) => {
  try {
    const response = await axios.get('/api/greeting')
    return response.data; 
  } catch (error) {
    return thunk.rejectWithValue(error.response.data)
  }
})

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: '',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(message.fulfilled, (state, action) => action.payload )
    builder.addCase(message.rejected, (state, action) => action.payload )
  }
})

export default greetingSlice.reducer