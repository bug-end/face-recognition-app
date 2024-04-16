import styles from './ImageLinkForm.module.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p>{'This Magic Brain will detect faces in your pictures. Give it a try'}</p>
      <div>
        <div className={styles.form}>
          <input type='text' onChange={onInputChange} />
          <button onClick={onButtonSubmit}>Detect</button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
