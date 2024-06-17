import styles from './ImageLinkForm.module.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className={styles.imageLinkFormWrapper}>
      <p className={styles.description}>This Magic Brain will detect faces in your pictures. Give it a try</p>
      <div>
        <input type='text' onChange={onInputChange} autoComplete='off' />
        <button onClick={onButtonSubmit}>Detect</button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
