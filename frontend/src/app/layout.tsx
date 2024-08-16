// src/layout.tsx
import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import {Providers} from './providers'; // Asegúrate de que esta ruta sea correcta

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <GlobalStyle />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
