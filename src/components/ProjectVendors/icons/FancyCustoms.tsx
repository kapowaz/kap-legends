import React from 'react';

import type { SVGComponent } from '../../../types';
import styles from './styles.module.css';

export const FancyCustoms: SVGComponent = ({ title = 'FancyCustoms', ...props }) => (
  <svg viewBox="0 0 18 18" {...props} className={styles.icon}>
    {title && <title>{title}</title>}
    <path d="M8.914 4.212 6.11 1.407 0 7.516l9.082 9.082L18 7.678l-6.277-6.276-2.809 2.809zm8.094 3.467-7.925 7.926-8.09-8.09 5.116-5.117 2.808 2.808 2.81-2.809 5.281 5.282zM4.622 7.174 7.586 4.21 6.11 2.732 1.326 7.515l7.76 7.76 1.81-1.81-3.14-3.14 1.651-1.651-1.486-1.486-1.643 1.643-1.656-1.657zm5.295 1 1.973-1.972 1.488 1.488-2.14 2.14 1.645 1.644 3.793-3.792-4.616-4.617-3.626 3.626 1.483 1.483z" />
  </svg>
);
