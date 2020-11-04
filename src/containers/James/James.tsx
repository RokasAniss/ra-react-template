import React, { FC } from 'react';

const James: FC<JamesProps> = ({
  label = 'James',
}: JamesProps) => {
  const className = 'james';

  return <div className={className}>{label}</div>;
};

interface JamesProps {
  label: string;
}

export default James;
