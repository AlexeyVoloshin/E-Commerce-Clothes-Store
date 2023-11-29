import React from 'react';
import { PropsWithChildren } from 'react';

const TheMain: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="container m-auto flex-shrink-1 flex-grow-1 flex-auto mt-16">
      {children}
    </main>
  );
};

export { TheMain };
