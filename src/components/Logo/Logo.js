import Tilt from 'react-parallax-tilt';
import brain from './brain.png';

import styles from './Logo.module.css';

export const Logo = () => {
  return (
    <div>
      <Tilt className={styles.tiltWrapper}>
        <img src={brain} alt='logo' className={styles.logo} />
      </Tilt>
    </div>
  );
};
