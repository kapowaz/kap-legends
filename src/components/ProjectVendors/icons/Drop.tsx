import React from 'react';

import type { SVGComponent } from '../../../types';
import styles from './styles.module.css';

export const Drop: SVGComponent = ({ title = 'Drop', ...props }) => (
  <svg viewBox="0 0 18 18" {...props} className={styles.icon}>
    {title && <title>{title}</title>}
    <path d="M18 9.005c0 7.35-8.205 8.113-8.205 8.113l-4.55-4.523 3.052-.01c4.555 0 4.395-3.585 4.395-3.585s.16-3.585-4.395-3.585l-3.05-.01v7.19L0 7.38V.882h8.3S18 .882 18 9v.006z" />
  </svg>
);
