import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const ProgressBar1 = () => {
  return (
    <div className='progressbar'>
      <p>Html 5 90%</p>
      <ProgressBar variant="danger" now={90} /><br />
      <p>CSS 3 80%</p>
      <ProgressBar variant="info" now={80} /><br />
      <p>Javascript 70%</p>
      <ProgressBar variant="warning" now={70} /><br />
      <p>PHP 60%</p>
      <ProgressBar variant="success" now={60} /><br />
      <p>React 50%</p>
      <ProgressBar variant="info" now={50} />
    </div>
  );
};

export default ProgressBar1;