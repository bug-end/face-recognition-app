import classNames from 'classnames';

import styles from './Button.module.css';

const cx = classNames.bind(styles);

export const Button = ({ children, onClick, variant, size }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};
