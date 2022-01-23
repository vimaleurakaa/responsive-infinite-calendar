import { configureStore } from "@reduxjs/toolkit";
import rootSlice from "./rootReducer";

export const store = configureStore({
  reducer: {
    app: rootSlice,
  },
});
