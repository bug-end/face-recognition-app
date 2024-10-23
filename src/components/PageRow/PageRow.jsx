import styles from './PageRow.module.css';

export const PageRow = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
