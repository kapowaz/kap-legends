import React from 'react';

import type { SVGComponent } from '../../../types';
import styles from './styles.module.css';

export const ZFrontier: SVGComponent = ({ title = 'zFrontier', ...props }) => (
  <svg viewBox="0 0 18 18" {...props} className={styles.icon}>
    {title && <title>{title}</title>}
    <path d="M1.94116 3H11.3949L16.0588 15H1.94116V3Z" />
  </svg>
);
