import React, { FC, ReactNode } from 'react';

import './ViewBase.scss';

const ViewBase: FC<ViewBaseProps> = ({ id, children }: ViewBaseProps) => {
  const className = 'view-base';

  return (
    <main className={className} id={id}>
      {children}
    </main>
  );
};

export interface ViewBaseProps {
  id: string;
  children: ReactNode;
}

export default ViewBase;
