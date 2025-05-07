import type { SVGComponent } from '../../../types';
import styles from './styles.module.css';

export const Geonworks: SVGComponent = ({ title = 'Geonworks', ...props }) => (
  <svg viewBox="0 0 18 18" {...props} className={styles.icon}>
    {title && <title>{title}</title>}
    <path d="M14.625 2.25L5.625 11.25L10.125 15.75L12.375 13.5V11.25L14.625 13.5L10.125 18L3.375 11.25L14.625 0V2.25ZM14.625 6.75L10.125 11.25V13.5L7.875 11.25L14.625 4.5V6.75ZM14.625 11.25H12.375L14.625 9V11.25Z" />
  </svg>
);
