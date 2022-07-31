import { createSlice } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../store";

export interface IOlympicData {
  athlete: string;
  age: number;
  country: string;
  year: number;
  date: string;
  sport: string;
  gold: number;
  silver: number;
  bronze: number;
  total: number;
}

export interface CounterState {
  data: IOlympicData[];
}

const initialState: CounterState = {
  data: [],
};

export const gridSlice = createSlice({
  name: "gridSlice",
  initialState,
  reducers: {
    setFetchedGridData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setFetchedGridData } = gridSlice.actions;

export const FetchGridData =
  (): AppThunk =>
  (dispatch) => {
    fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
    .then((resp) => resp.json())
    .then((data: IOlympicData[]) => dispatch(setFetchedGridData(data)));
  };



export const getGridData = (state: RootState) => state.grid.data;

export default gridSlice.reducer;
