import styles from './FaceRecognition.module.css';

const FaceRecognition = ({ imageUrl, boxes }) => {
  return (
    <div>
      <div>
        <img id='inputimage' src={imageUrl} alt='' width='500px' height='auto' />
        {boxes.map((box, i) => {
          return (
            <div
              key={i}
              className={styles.boundingBox}
              style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default FaceRecognition;
