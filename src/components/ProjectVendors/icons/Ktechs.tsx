import React from 'react';

import type { SVGComponent } from '../../../types';
import styles from './styles.module.css';

export const Ktechs: SVGComponent = ({ title = 'ktechs', ...props }) => (
  <svg viewBox="0 0 18 18" {...props} className={styles.icon}>
    {title && <title>{title}</title>}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM7.12406 3.375V9.78287L10.2608 6.46633H12.8704L9.24074 10.3622L13.4047 14.624H10.8455L7.12406 10.8594V14.625H4.97731V3.375H7.12406Z"
    />
  </svg>
);
