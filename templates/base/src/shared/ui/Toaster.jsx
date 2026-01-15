import React from 'react';
import { Toaster as Toasts } from 'react-hot-toast';

export const Toaster = React.memo(() => {
  return (
    <Toasts
      position="top-right"
      toastOptions={{
        style: {
          borderRadius: '8px',
          fontSize: '13px',
          background: '#fff',
          color: '#000',
        },
        error: {
          style: {
            background: '#fe8686',
            color: '#fff',
            backdropFilter: 'blur(20px)',
          },
        },
        success: {
          style: {
            background: '#c2fcbf',
            backdropFilter: 'blur(20px)',
          },
        },
      }}
    />
  );
});
