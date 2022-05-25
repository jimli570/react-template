import React from 'react';

interface IProps {
  children?: React.ReactNode;
}

export default function LayoutMain({ children } : IProps) {
  return (
    <div className="">
      { children }
    </div>
  );
}

LayoutMain.defaultProps = {
  children: null,
};
