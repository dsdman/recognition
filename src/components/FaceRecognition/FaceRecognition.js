import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ imageURL, box }) => {
  const { topRow, rightCol, bottomRow, leftCol } = box;
  return(
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' src={imageURL} alt='' width='300px' height='auto' />
        <div className='bounding-box' style={{top: topRow, right: rightCol, bottom: bottomRow, left: leftCol}}></div>
      </div>
    </div>
  );
}

export default FaceRecognition;
