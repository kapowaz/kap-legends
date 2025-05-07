import type { SVGComponent } from '../../../types';
import styles from './styles.module.css';

export const Ilumkb: SVGComponent = ({ title = 'iLumkb', ...props }) => (
  <svg viewBox="0 0 18 18" {...props} className={styles.icon}>
    {title && <title>{title}</title>}
    <path d="M6.19727 9.57031C6.19744 11.138 7.46845 12.409 9.03613 12.4092C10.6039 12.4092 11.8748 11.1381 11.875 9.57031H15.7793C15.7791 13.294 12.7598 16.3125 9.03613 16.3125C5.31254 16.3124 2.29412 13.2939 2.29395 9.57031H6.19727ZM14.4346 4.32227L9.03613 9.7207L3.6377 4.32227L6.27246 1.6875L9.03613 4.45117L11.7998 1.6875L14.4346 4.32227Z" />
  </svg>
);
