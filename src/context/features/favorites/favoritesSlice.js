import {createSlice} from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    value: 0,
    arr: [],
  },
  reducers: {
    addToFavs: (state, action) => {
      !state.arr.includes(action.payload)
        ? (state.arr = [...state.arr, action.payload])
        : undefined;
    },
    removeFromFavs: (state, action) => {
      let i = state.arr.indexOf(action.payload);
      if (i > -1) {
        state.arr.splice(i, 1);
      }
    },
  },
});

export const {addToFavs, removeFromFavs} = favoritesSlice.actions;

export default favoritesSlice.reducer;
