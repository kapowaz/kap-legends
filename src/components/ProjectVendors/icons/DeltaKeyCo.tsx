import type { SVGComponent } from '../../../types';
import styles from './styles.module.css';

export const DeltaKeyCo: SVGComponent = ({ title = 'Delta Key Co', ...props }) => (
  <svg viewBox="0 0 18 18" {...props} className={styles.icon}>
    {title && <title>{title}</title>}
  </svg>
);
