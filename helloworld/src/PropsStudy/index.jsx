import React from 'react';
import { Name } from './style';

const index = ({ name = 'eui', isSpecial = false }) => {
  return (
    <Name>
      <div>{name}</div>
    </Name>
  );
};

export default index;
