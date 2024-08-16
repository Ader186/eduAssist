// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Asegúrate de que esta ruta sea correcta

export const store = configureStore({
  reducer: {
    root: rootReducer, // Usa tu reducer principal aquí
  },
});

// Exporta tipos para usar en tu aplicación
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
