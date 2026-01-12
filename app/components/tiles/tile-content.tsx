import { ReactNode } from 'react';

interface TileContentProps {
  children?: ReactNode;
}

export const TileContent = ({ children }: TileContentProps) => {
  return (
    <div className="relative w-full h-full overflow-hidden">{children}</div>
  );
};
