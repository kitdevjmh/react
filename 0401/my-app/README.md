# Web Programming
## 2025.04.01 학습내용
# React Hooks 정리

이 저장소는 **소플의 처음 만난 리액트** 및 **Web Programming II** 수업을 기반으로 한 **React Hooks** 정리입니다.  
React에서 자주 사용되는 기본 Hook들을 간단한 예제와 함께 설명합니다.

---

## 📌 목차

1. [useState](#1-usestate)
2. [useEffect](#2-useeffect)
3. [useMemo](#3-usememo)
4. [useCallback](#4-usecallback)
5. [useRef](#5-useref)

---

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
