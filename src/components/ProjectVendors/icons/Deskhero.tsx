import React from 'react';

import type { SVGComponent } from '../../../types';
import styles from './styles.module.css';

export const Deskhero: SVGComponent = ({ title = 'Deskhero', ...props }) => (
  <svg viewBox="0 0 18 18" {...props} className={styles.icon}>
    {title && <title>{title}</title>}
    <path d="M11.07 8.232H7v-2.45H5.902v6.101H7v-2.35h4.07v2.35h1.034V5.778H11.07v2.454zm-9.874 3.724V6.017h2.46v-.881H0v7.748h3.656v-.928h-2.46zM14.61 5.112l-.007.915h2.272v5.9h-2.272v.961H18V5.112h-3.39z" />
  </svg>
);
