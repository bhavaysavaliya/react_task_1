import React from 'react';
import { useSelector } from 'react-redux';

// As instructed in task, this is the component in which the updated value of text is to be displayed.
const ComponentC = () => {
  // extract updated value of text from redux store
  const value = useSelector((state) => state.inputtext_of_component_b.value);


  return (
    <div>
      <p>Value of inputText from Component B is: {value}</p>
    </div>
  );
};

export default ComponentC;