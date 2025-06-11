# 📘 Web Programming II - React 정리
---

## ⚛️ React란?
React는 **사용자 인터페이스(UI)**를 만들기 위한 **JavaScript 라이브러리**  
컴포넌트 기반 구조를 통해 복잡한 UI를 효율적으로 구축할 수 있음

---

## 🔹 React Element

### 📌 정의
- React 앱을 구성하는 가장 작은 블록입니다.
- HTML의 요소와 유사하지만, 실제 DOM이 아닌 **Virtual DOM(가상 DOM)**에 존재
- 불변 객체이며, 변경이 필요할 경우 **새로운 Element를 생성**해야

### 📌 생성 방법
1. **JSX 사용**
   ```jsx
   const element = <div>Hello, world!</div>;
