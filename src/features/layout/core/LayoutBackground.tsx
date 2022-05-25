import React from 'react';

import styles from 'features/layout/core/LayoutBackground.module.scss';

interface IProps {
  children: React.ReactNode;
}

export default function LayoutBackground({ children } : IProps) {
  return (
    <div className={styles['layout-background']}>
      { children }
    </div>
  );
}
