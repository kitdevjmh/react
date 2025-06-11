# Web Programming
## 2025.03.13 학습내용

## 📌 개요
React Hooks는 함수형 컴포넌트에서도 상태(state) 및 생명주기(lifecycle) 기능을 사용할 수 있도록 해주는 기능입니다. 기존에는 클래스형 컴포넌트에서만 가능했지만, Hooks의 도입으로 함수형 컴포넌트도 동등한 기능을 수행할 수 있게 되었습니다.

## 📖 Hooks란?
- 기존 기능에 "갈고리(hook)"를 걸어 특정 시점에 함수가 실행되도록 만드는 것
- 함수형 컴포넌트에서도 상태 관리 및 생명주기 기능을 사용 가능
- 모든 Hook 이름은 `use`로 시작해야 함
- 클래스형 없이도 React 기능 사용 가능 → 코드 간결성, 재사용성, 테스트 용이성 향상

---

## 🔧 주요 Hook 설명

### `useState()`
- **상태 변수 선언 및 변경 함수 제공**
```js
const [state, setState] = useState(initialValue);
```
- 상태 변경 방식
  - 기본: `setState(newValue)`
  - 객체: `setState(prev => ({ ...prev, newProp: value }))`
  - 배열: `setState([...array, newItem])`
  - 함수형 업데이트: `setState(prev => prev + 1)`

### `useEffect()`
- **부수 효과(side effect) 처리 (ex. 데이터 fetch, 구독, 타이머 등)**
```js
useEffect(() => {
  // 수행할 작업
  return () => {
    // 정리(clean-up) 작업
  };
}, [dependencies]);
```
- 실행 조건
  - `[]`: 마운트 시 한 번 실행
  - `[state]`: 해당 값이 바뀔 때만 실행
  - 생략: 매 렌더링마다 실행

### `useMemo()`
- **복잡한 계산 결과를 메모이제이션(캐싱)하여 렌더링 성능 최적화**
```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```
- 사용 시기
  - 연산 비용이 큰 계산
  - 객체/배열의 불필요한 재생성 방지
- 주의사항
  - 모든 계산을 memoize하지 말 것
  - 순수 함수 사용
  - 의존성 배열 정확하게 지정

### `useCallback()`
- **함수 메모이제이션 (불필요한 함수 재생성 방지)**
```js
const memoizedCallback = useCallback(() => {
  // 함수 로직
}, [dependencies]);
```
- 사용 시기
  - 자식 컴포넌트에 함수 props 전달 시
  - 이벤트 핸들러 최적화 필요 시
- 주의사항
  - 과도한 사용 시 오히려 성능 저하
  - 순수 함수로 작성
  - 정확한 의존성 배열 설정

### `useRef()`
- **DOM 요소 참조 및 렌더링과 무관한 값 저장**
```js
const ref = useRef(initialValue);
```
- `.current` 속성 사용
- DOM 직접 접근 또는 상태 저장 (리렌더링 X)

---

## 🧩 Custom Hook
- `use`로 시작하는 사용자 정의 Hook
- 내부에서 다른 Hook 사용 가능
- 반복되는 로직을 재사용 가능한 함수로 분리
- 예시:
```js
function useCustomHook() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log('Custom Hook Effect');
  }, []);
  return [value, setValue];
}
```

---

## 📎 Hook 사용 규칙
1. **항상 최상위 레벨에서 호출**
   - 조건문, 반복문, 중첩 함수 내에서 호출 금지
2. **React 함수형 컴포넌트나 Custom Hook 내에서만 사용 가능**
3. **`eslint-plugin-react-hooks` 플러그인 사용 권장**

---

## ✅ 참고
- [공식 React 문서 - Hooks](https://reactjs.org/docs/hooks-intro.html)
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
