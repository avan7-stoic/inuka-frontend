import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCharityRequests } from '../../api/apiService';

export const getCharityRequests = createAsyncThunk(
  'charity/getCharityRequests',
  async () => {
    const data = await fetchCharityRequests();
    return data;
  }
);

const charitySlice = createSlice({
  name: 'charity',
  initialState: { requests: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCharityRequests.fulfilled, (state, action) => {
      state.requests = action.payload;
    });
  },
});

export default charitySlice.reducer;
