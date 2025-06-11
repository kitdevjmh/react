
# React 웹프로그래밍2 - 소플의 처음 만난 React

---

## Event-Handler

사용자 인터페이스에서 발생하는 이벤트(예: 클릭, 입력 등)에 대한 응답으로 실행되는 함수

---

## Event, Event handler

- 사건 => 사용자가 버튼을 클릭한 사건 => 버튼 클릭 이벤트
- Event Handler(=Event listener) : 사용자가 웹 페이지와 상호작용할 때 발생하는 다양한 이벤트(클릭, 마우스 오버, 키 입력 등)에 반응하여 특정 동작을 수행하는 함수입니다.
- DOM의 이벤트
- React의 이벤트

```html
<button onclick="activate()">
Activate
</button>
<button onClick={activate}>
Activate
</button>
```

---

## 기본 이벤트 핸들러 사용법

React에서 이벤트 핸들러는 JSX에서 camelCase로 작성되며, 함수로 전달됩니다.

```jsx
function ButtonComponent() {
  function handleClick() {
    alert("버튼이 클릭되었습니다!");
  }
  return <button onClick={handleClick}>클릭</button>;
}
```

위 코드에서 `onClick={handleClick}` 부분이 이벤트 핸들러이다. `handleClick` 함수는 버튼이 클릭될 때 실행됩니다.

---

## 이벤트 객체 사용 (SyntheticEvent)

React에서는 이벤트 핸들러 함수의 첫 번째 매개변수로 SyntheticEvent 객체가 전달된다. 이를 활용하면 이벤트 정보를 활용할 수 있습니다.

```jsx
function InputComponent() {
  function handleChange(event) {
    console.log("입력값:", event.target.value);
  }
  return <input type="text" onChange={handleChange} />;
}
```

위 코드에서 `event.target.value`를 사용하여 입력 필드의 값을 가져올 수 있습니다.

---

## 클래스 컴포넌트에서 이벤트 핸들러

클래스 컴포넌트에서는 `this` 바인딩이 필요할 수 있습니다.

```jsx
function ButtonComponent() {
  function handleClick() {
    alert("버튼이 클릭되었습니다!");
  }
  return <button onClick={handleClick}>클릭</button>;
}
```

혹은 클래스 필드 문법을 사용하여 바인딩 없이도 이벤트 핸들러를 정의할 수 있습니다.

```jsx
class ButtonComponent extends React.Component {
  handleClick = () => {
    alert("클래스 컴포넌트 버튼 클릭!");
  };
  render() {
    return <button onClick={this.handleClick}>클릭</button>;
  }
}
```

---

## 인자 전달

이벤트 핸들러에 추가적인 인자를 전달하려면 화살표 함수를 사용하거나 `bind`를 활용할 수 있습니다.

```jsx
function ButtonComponent() {
  function handleClick(name) {
    alert(`${name}님, 버튼을 클릭했습니다!`);
  }
  return <button onClick={() => handleClick("홍길동")}>클릭</button>;
}
```

클래스 컴포넌트에서는 `bind`를 사용할 수도 있습니다.

```jsx
class ButtonComponent extends React.Component {
  handleClick(name) {
    alert(`${name}님, 버튼을 클릭했습니다!`);
  }
  render() {
    return <button onClick={this.handleClick.bind(this, "홍길동")}>클릭</button>;
  }
}
```

---

## 이벤트 핸들러에서 상태 변경

이벤트 핸들러 내부에서 `useState`를 사용하여 상태를 변경할 수 있다.

```jsx
import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={handleClick}>증가</button>
    </div>
  );
}
```

---

## 기본 이벤트 동작 방지 (preventDefault)

이벤트의 기본 동작(예: 폼 제출, 링크 이동)을 막을 때 `event.preventDefault()`를 사용합니다.

```jsx
function FormComponent() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("폼 제출이 방지되었습니다.");
  }
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">제출</button>
    </form>
  );
}
```

---

## 이벤트 전파 중지 (stopPropagation)

이벤트가 부모 요소로 전파되지 않도록 `event.stopPropagation()`을 사용할 수 있습니다.

```jsx
function Parent() {
  function handleParentClick() {
    alert("부모 요소 클릭!");
  }
  function handleChildClick(event) {
    event.stopPropagation();
    alert("자식 요소 클릭!");
  }
  return (
    <div onClick={handleParentClick} style={{ padding: "20px", background: "#ddd" }}>
      <button onClick={handleChildClick}>클릭</button>
    </div>
  );
}
```

---

## 이벤트 핸들러 최적화 (useCallback)

이벤트 핸들러가 불필요하게 재생성되는 것을 방지하려면 `useCallback`을 사용할 수 있습니다.

```jsx
import { useState, useCallback } from "react";
function OptimizedComponent() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={handleClick}>증가</button>
    </div>
  );
}
```

---

## Example 1

```jsx
import React from "react";
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }
  render() {
    return (
      <button
        onClick={this.handleClick}
        disabled={this.state.isConfirmed}
      >
        {this.state.isToggleOn ? "켜짐":"꺼짐"}
      </button>
    )
  }
}
export default Toggle;
```

[참고: MDN bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

---

## Example 2

```jsx
class MyButton extends React.Component {
  handleClick = () => {
    console.log('this is :', this);
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        클릭
      </button>
    );
  }
}
```

Class field syntax 사용

```jsx
class MyButton extends React.Component {
  handleClick() {
    console.log('this is :', this);
  }
  render() {
    return (
      <button onClick={ () => this.handleClick()}>
        클릭
      </button>
    );
  }
}
```

Arrow Function 사용

---

## 함수 컴포넌트 예제

```jsx
function Toggle(props) {
  const [isToggleOn, setIsToggleOn] = useState(true);

  // 방법 1. 함수 안에 함수로 정의
  function handleClick() {
    setIsToggleOn(isToggleOn => !isToggleOn);
  }

  // 방법 2. arrow function을 사용하여 정의
  const handleClickArrow = () => {
    setIsToggleOn(isToggleOn => !isToggleOn);
  }

  return (
    <button onClick={handleClick}>
      {isToggleOn ? "켜짐" : "꺼짐" }
    </button>
  );
}
```

---

## Example 3 - 인자 전달

```jsx
function MyButton(props) {
  const handleDelete = (id, event) => {
    console.log(id, event.target);
  };
  return (
    <button onClick={(event) => handleDelete(1, event)}>
      삭제하기
    </button>
  );
}
```

---

## DOM event vs React event

### 이벤트 처리 방식 (이벤트 등록 방식) 비교

| 비교 항목          | DOM 이벤트                     | React 이벤트                  |
|-------------------|-------------------------------|------------------------------|
| 이벤트 등록 방식   | addEventListener 사용           | JSX에서 onEvent 속성을 사용   |
| 이벤트 제거 방식   | removeEventListener 필요        | 컴포넌트 언마운트 시 자동 제거 |
| 이벤트 네이밍 방식 | 소문자 (click, change)          | 카멜 케이스 (onClick, onChange) |
| this 바인딩 필요 여부 | 필요할 수도 있음                | 함수형 컴포넌트에서는 필요 없음 |

```html
<button id="btn">클릭</button>
<script>
  document.getElementById("btn").addEventListener("click", function () {
    alert("DOM 이벤트 핸들러 실행!");
  });
</script>
```

```jsx
function ButtonComponent() {
  function handleClick() {
    alert("React 이벤트 핸들러 실행!");
  }
  return <button onClick={handleClick}>클릭</button>;
}
```

---

## 이벤트 객체 (Event Object)

| 비교 항목       | DOM 이벤트                          | React 이벤트                       |
|----------------|-----------------------------------|----------------------------------|
| 이벤트 객체    | Event 객체 (MouseEvent, KeyboardEvent 등) | SyntheticEvent 객체               |
| 이벤트 속성    | event.target, event.clientX 등    | event.target, event.nativeEvent 등 |
| 이벤트가 사라지는 시점 | 지속됨                            | SyntheticEvent는 자동으로 풀(pool) 처리 |

```html
<button id="btn">클릭</button>
<script>
  document.getElementById("btn").addEventListener("click", function (event) {
    console.log(event.target); // 클릭된 버튼 요소
  });
</script>
```

```jsx
function ButtonComponent() {
  function handleClick(event) {
    console.log(event.target); // 클릭된 버튼 요소
  }
  return <button onClick={handleClick}>클릭</button>;
}
```

---

## SyntheticEvent 특징

React는 자체적으로 SyntheticEvent를 제공하는데, 이는 브라우저의 네이티브 이벤트를 감싼 객체로, 모든 브라우저에서 동일한 인터페이스를 제공합니다.

또한 SyntheticEvent는 이벤트 풀링(Event Pooling)을 사용하여 성능을 최적화하는데, 핸들러 실행 후 이벤트 객체가 재사용되므로 비동기 코드에서는 `event.persist()`를 호출해야 합니다.

```jsx
function ButtonComponent() {
  function handleClick(event) {
    event.persist(); // SyntheticEvent의 풀링 방지
    setTimeout(() => {
      console.log(event.target); // 정상 동작
    }, 1000);
  }
  return <button onClick={handleClick}>클릭</button>;
}
```

---

## 이벤트 전파 방식 (Event Bubbling & Capturing)

| 비교 항목       | DOM 이벤트                          | React 이벤트                    |
|----------------|-----------------------------------|--------------------------------|
| 이벤트 전파    | 기본적으로 버블링 (Bubbling)        | 기본적으로 버블링 (Bubbling)     |
| 캡처링 지원    | `{ capture: true }` 옵션 사용        | onClickCapture 등 Capture 접미사 사용 |
| 이벤트 중지    | `event.stopPropagation()` 사용      | `event.stopPropagation()` 사용 |

```html
<div id="parent">
  <button id="child">클릭</button>
</div>
<script>
  document.getElementById("parent").addEventListener("click", function () {
    alert("부모 요소 클릭!");
  });
  document.getElementById("child").addEventListener("click", function (event) {
    event.stopPropagation(); // 이벤트 전파 중지
    alert("자식 요소 클릭!");
  });
</script>
```

```jsx
function Parent() {
  function handleParentClick() {
    alert("부모 요소 클릭!");
  }
  function handleChildClick(event) {
    event.stopPropagation(); // 이벤트 전파 중지
    alert("자식 요소 클릭!");
  }
  return (
    <div onClick={handleParentClick} style={{ padding: "20px", background: "#ddd" }}>
      <button onClick={handleChildClick}>클릭</button>
    </div>
  );
}
```

---

## 이벤트 성능 및 관리

- React는 모든 이벤트를 루트 요소(document)에서 관리하여 이벤트 리스너를 한 곳에서 처리하는 이벤트 위임(Event Delegation) 방식을 사용합니다.
- 따라서 개별 요소마다 addEventListener를 여러 개 추가할 필요 없이, React의 이벤트 시스템이 자동으로 관리합니다.
- 또한, `useCallback`을 사용하면 불필요한 이벤트 핸들러 재생성을 방지할 수 있습니다.

```jsx
import { useState, useCallback } from "react";
function OptimizedComponent() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={handleClick}>증가</button>
    </div>
  );
}
```

| 비교 항목    | DOM 이벤트                 | React 이벤트                          |
|------------|---------------------------|-------------------------------------|
| 이벤트 위임 | 수동으로 설정 필요          | 자동으로 위임 (document에서 관리)    |
| 메모리 관리 | 이벤트 제거 필요           | 자동으로 정리됨 (컴포넌트 언마운트 시)|
| 최적화 기능 | 없음                      | useCallback으로 최적화 가능           |

---

## 결론

- React 이벤트 시스템은 코드 작성이 간결하고, 이벤트 위임을 활용해 성능을 최적화하며, 자동 메모리 관리를 지원한다.
- 하지만 React의 SyntheticEvent가 이벤트 객체를 풀링(pooling)하는 특성을 이해하고, 필요할 때 `event.persist()`를 사용해야 한다.

---

## 실습: Class component

```jsx
import React, { useState } from "react";
class ConfirmButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isConfirmed: false,
    };
    this.handleConfirm = this.handleConfirm.bind(this);
  }
  handleConfirm() {
    this.setState((prevState) => ({
      isConfirmed: !prevState.isConfirmed
    }));
  }
  render() {
    return (
      <button
        onClick={this.handleConfirm}
        disabled={this.state.isConfirmed}
      >
        {this.state.isConfirmed ? "확인됨" : "확인하기"}
      </button>
    );
  }
}
export default ConfirmButton;
```

---

## 실습: Functional component

```jsx
import React, { useState } from "react";
function ConfirmButton(props) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const handleConfirm = () => {
    setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
  };
  return (
    <button onClick={handleConfirm} disabled={isConfirmed}>
      {isConfirmed ? "확인됨" : "확인하기"}
    </button>
  );
}
export default ConfirmButton;
```
