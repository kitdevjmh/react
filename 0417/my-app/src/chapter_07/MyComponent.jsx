import React, { useEffect } from 'react';

const MyComponent = () => {
    useEffect(() => {
        console.log('컴포넌트가 마운트되었습니다.');
      
        return () => {
          console.log('컴포넌트가 언마운트되었습니다.');
        };
      }, []);      

  return <div>안녕하세요! 저는 MyComponent입니다.</div>;
};

export default MyComponent;
