import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  month: null,
  eventsData: null,
};

export const rootSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    activeMonth: (state, { payload }) => {
      return { ...state, month: payload };
    },
    setEventsData: (state, { payload }) => {
      return { ...state, eventsData: payload };
    },
  },
});

export const { activeMonth, setEventsData } = rootSlice.actions;

export default rootSlice.reducer;
