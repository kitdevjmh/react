# Web Programming
## 2025.04.01 학습내용
# React Hooks 정리
---

## 📌 목차

1. [useState](#1-usestate)
2. [useEffect](#2-useeffect)
3. [useMemo](#3-usememo)
4. [useCallback](#4-usecallback)
5. [useRef](#5-useref)

---
## Hooks
특정 위치에 원하는 함수가 실행되도록 갈고리를 걸어두는 것


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
