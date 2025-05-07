import type { SVGComponent } from '../../../types';
import styles from './styles.module.css';

export const KeebzNCables: SVGComponent = ({ title = 'Keebz n Cables', ...props }) => (
  <svg viewBox="0 0 18 18" {...props} className={styles.icon}>
    {title && <title>{title}</title>}
  </svg>
);
