import React from 'react';

import type { SVGComponent } from '../../../types';
import styles from './styles.module.css';

export const Protozoa: SVGComponent = ({ title = 'Protozoa', ...props }) => (
  <svg viewBox="0 0 18 18" {...props} className={styles.icon}>
    {title && <title>{title}</title>}
    <path d="M4 18v-2h12V2H0V0h18v18H4zM2 8h2V4h10v10H4v-4H2v8H0V4h2v4zm4 4h6V6H6v6z" />
  </svg>
);
