import React, { useState, useEffect } from 'react';
import { reaction, observable } from 'mobx';
import { observer } from 'mobx-react';

const obj = observable({
  isLoading: false,
  isChecked: false,
});

const Form = () => {
  const [count, setCount] = useState(0);

  // correct use of reaction: reacts to length and title changes
  const reaction2 = reaction(
    () => obj.isLoading,
    (isLoading) => {
      console.log('isLoading', isLoading);
    },
  );

  useEffect(() => {
    reaction2();
  }, [reaction2]);

  const handleReactionTrue = () => {
    obj.isLoading = true;
  };

  const handleReactionFalse = () => {
    obj.isLoading = false;
  };

  return (
    <div>
      <button onClick={ () => setCount((count) => count + 1) }>{count}</button>
      <button onClick={ handleReactionFalse }>false</button>
      <button onClick={ handleReactionTrue }>true</button>
    </div>
  );
};

export default observer(Form);
