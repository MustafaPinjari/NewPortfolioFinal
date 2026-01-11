import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function WorkContainer({ children }: Props) {
  return (
    <div className="grid min-h-screen w-full max-w-[100vw] grid-cols-1 lg:grid-cols-2 overflow-hidden">
      {children}
    </div>
  );
}
