import React from 'react';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';

// This is our main component that is to be displayed. It consists of ComponentB and ComponentC
const ComponentA = () => {
  return (
    <div>
      <ComponentB />
      <ComponentC />
    </div>
  );
};

export default ComponentA;