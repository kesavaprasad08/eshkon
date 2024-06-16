import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

interface AppState {
  isLoaded: boolean;
}

const initialState: AppState = {
  isLoaded: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoaded: (state) => {
      state.isLoaded = true;
    },
  },
});

export const { setLoaded } = appSlice.actions;

const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
