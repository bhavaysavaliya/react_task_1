import React from 'react';
import { useDispatch } from 'react-redux';
import { setValue } from '../redux_store/actions';

// As instructed in task, this is the component in which the input text of Component B is to be stored in redux store.
const ComponentB = () => {
  const dispatch = useDispatch();


  const performChange = (inputText) => {
    // helps to save updated value of inputText to redux store
    dispatch(setValue(inputText.target.value));
  };

  
  return (
    <div>
      <input type="text" onChange={performChange} />
    </div>
  );
};

export default ComponentB;