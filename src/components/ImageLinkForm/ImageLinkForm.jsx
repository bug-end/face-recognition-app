import { Button } from '../Button/Button';

import styles from './ImageLinkForm.module.css';

export const ImageLinkForm = ({ onInputChange, onButtonSubmit, inputValue }) => {
  return (
    <div className={styles.imageLinkFormWrapper}>
      <p className={styles.description}>
        This Magic Brain will detect faces in your pictures.
        <br />
        Give it a try!
      </p>
      <div className={styles.inputWrapper}>
        <input type='text' onChange={onInputChange} autoComplete='off' className={styles.input} value={inputValue} />
        <Button onClick={onButtonSubmit}>Detect</Button>
      </div>
    </div>
  );
};
