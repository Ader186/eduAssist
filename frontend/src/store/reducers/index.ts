// src/store/reducers/index.ts
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Define tu estado inicial aquí
};

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    // Define tus reducers aquí
    exampleAction(state, action) {
      // Lógica para modificar el estado
    },
  },
});

export const { exampleAction } = exampleSlice.actions;
export default exampleSlice.reducer;
