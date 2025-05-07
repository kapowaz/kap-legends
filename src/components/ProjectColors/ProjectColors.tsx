import type { IProject } from '@site/src/projects';
import styles from './ProjectColors.module.css';

export const ProjectColors = ({ main, legends }: IProject['colors']) => (
  <div className={styles.projectColor} style={{ backgroundColor: main }}>
    {legends.map((color) => (
      <div key={color} className={styles.legendColor} style={{ backgroundColor: color }}></div>
    ))}
  </div>
);
