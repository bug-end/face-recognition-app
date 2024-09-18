import styles from './Rank.module.css';

export const Rank = ({ name, entries }) => {
  return (
    <div className={styles.rankWrapper}>
      <div className={styles.title}>{`${name}, your current entry count is...`}</div>
      <div className={styles.entries}>{entries}</div>
    </div>
  );
};
