import classNames from 'classnames';

import styles from './Button.module.css';

const cx = classNames.bind(styles);

export const Button = ({ children, onClick, variant = 'primary', size }) => {
  const buttonClasses = cx({
    [styles.button]: true,
    [styles.primary]: variant === 'primary',
    [styles.secondary]: variant === 'secondary',
  });

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};
