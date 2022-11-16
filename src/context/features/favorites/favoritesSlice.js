import {createSlice} from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    value: 0,
    arr: [],
  },
  reducers: {
    increment: state => {
      state.value += 1;
      console.log(state.value);
    },
    decrement: state => {
      state.value -= 1;
      console.log(state.value);
    },
    addToFavs: (state, action) => {
      !state.arr.includes(action.payload)
        ? (state.arr = [...state.arr, action.payload])
        : undefined;
    },
    removeFromFavs: (state, action) => {
      state.arr.includes(action.payload)
        ? state.arr.pop(action.payload)
        : undefined;
    },
  },
});

export const {increment, decrement, addToFavs, removeFromFavs} =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
