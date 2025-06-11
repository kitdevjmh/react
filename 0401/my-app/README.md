# Web Programming
## 2025.04.01 학습내용
# React Hooks 정리
---
## Hooks
특정 위치에 원하는 함수가 실행되도록 갈고리를 걸어두는 것

* 기존에는 클래스형 컴포넌트에서만 state와 생명주기 기능을 사용할 수 있었습니다.
--  Hook을 사용하면 함수형 컴포넌트에서도 상태(state)와 생명주기(lifecycle)를 관리할 수 있습니다.
• 클래스 없이도 React 기능을 활용할 수 있어 코드가 간결하고 재사용성이 높습니다.
• 훅을 사용하면 클래스형 컴포넌트 없이도 상태 관리와 사이드 이펙트를 처리할 수 있습니다.
• Hooks의 등장으로 함수형 컴포넌트는 클래스형 컴포넌트와 동등한 기능을 수행할 수 있게 되었으며,
• 코드 간결성, 재사용성, 테스트 용이성 등 다양한 장점을 누릴 수 있게 되었습니다.


## 1. useState

상태(state)를 함수형 컴포넌트에서 관리할 수 있게 해주는 Hook입니다.

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
