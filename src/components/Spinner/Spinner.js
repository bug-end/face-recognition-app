import React from 'react';
import { RotatingSquare } from 'react-loader-spinner';

export const Spinner = () => {
  return <RotatingSquare visible={true} height='100' width='100' color='#000' ariaLabel='rotating-square-loading' />;
};
