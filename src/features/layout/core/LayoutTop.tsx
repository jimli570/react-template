import React from 'react';

interface IProps {
  children?: React.ReactNode;
}

export default function LayoutTop({ children } : IProps) {
  return (
    <div className="">
      { children }
    </div>
  );
}

LayoutTop.defaultProps = {
  children: null,
};
