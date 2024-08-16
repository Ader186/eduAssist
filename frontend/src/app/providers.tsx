'use client';

import React from 'react'; // Asegúrate de importar React
import { Provider } from 'react-redux';
import { store } from '../store/store'; // Verifica que esta ruta sea correcta

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
