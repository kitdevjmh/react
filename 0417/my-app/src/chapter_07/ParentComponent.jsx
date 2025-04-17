import React, { useState } from 'react';
import MyComponent from './MyComponent';

const ParentComponent = () => {
  const [showComponent, setShowComponent] = useState(true);

  const toggleComponent = () => {
    setShowComponent(prev => !prev);
  };

  return (
    <div>
      <button onClick={toggleComponent}>
        {showComponent ? '컴포넌트 숨기기' : '컴포넌트 보이기'}
      </button>
      {showComponent && <MyComponent />}
    </div>
  );
};

export default ParentComponent;
