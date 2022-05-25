import React from 'react';

interface IProps {
  children?: React.ReactNode;
}

export default function LayoutFooter({ children } : IProps) {
  return (
    <div className="">
      { children }
    </div>
  );
}

LayoutFooter.defaultProps = {
  children: null,
};
