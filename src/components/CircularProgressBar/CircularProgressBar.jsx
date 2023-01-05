import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgressBar = ({ value }) => {
  return (
    <div>
      <CircularProgressbar value={value} text={`${value}% expended`} />
    </div>
  );
};

export default CircularProgressBar;
