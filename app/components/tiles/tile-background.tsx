import { ReactNode } from 'react';

interface TileBackgroundProps {
  children: ReactNode;
}

export default function TileBackground({ children }: TileBackgroundProps) {
  return <div className="absolute inset-0 w-full h-full">{children}</div>;
}
