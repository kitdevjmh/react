# 2025.03.20 수업내용

## React Element

* React 앱을 구성하는 가장 작은 단위.
* HTML 요소와 유사하지만 실제 DOM이 아닌 Virtual DOM에 존재하는 객체.
* 변경 불가능(immutable)하며, 변경 시 새 Element를 생성.

### Element 생성 방법

1. JSX

```jsx
const element = <div>Hello, world!</div>;
```

2. React.createElement()

```js
const element = React.createElement('div', null, 'Hello, world!');
```

## React Component

* 여러 Element를 조합하여 독립적인 UI 블록을 만드는 함수 또는 클래스.
* 재사용 가능하며 상태(state)를 가질 수 있음.

### 컴포넌트 종류

1. 함수형 컴포넌트

```jsx
function Welcome() {
  return <h1>Hello, React Component!</h1>;
}
```

2. 클래스형 컴포넌트

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, React Component!</h1>;
  }
}
```

## Element vs Component

| 구분   | React Element | React Component        |
| ---- | ------------- | ---------------------- |
| 정의   | UI의 가장 작은 단위  | 여러 Element를 포함하는 UI 블록 |
| 형태   | 변경 불가능한 객체    | 함수 또는 클래스              |
| 재사용  | 불가능           | 가능                     |
| 업데이트 | 새 Element 생성  | 상태 변화로 자동 업데이트         |

## Rendering

1. **초기 렌더링**: 애플리케이션 실행 시 가상 DOM 생성 및 실제 DOM에 반영.
2. **상태 변화**: props/state 변경 시 가상 DOM 재생성.
3. **디프(Diffing)**: 변경된 가상 DOM과 기존 DOM 비교.
4. **업데이트**: 변경된 부분만 실제 DOM에 반영.

## Root DOM Node

* HTML의 `<div id="root">` 요소.
* React 앱이 렌더링되는 시작점.
* React 18부터 `ReactDOM.createRoot()` 사용:

```js
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

## 실습 예제들

### Clock.jsx (컴포넌트 사용 예)

```jsx
function Clock(props) {
  return (
    <div>
      <h1>안녕, 리액트!</h1>
      <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
    </div>
  );
}
```

### index.js (1초마다 렌더링)

```js
function tick() {
  root.render(<App />);
}
setInterval(tick, 1000);
```

## HTML 파일 실습 예제

### clock\_test1.html

JSX로 시간을 출력:

```html
<script type="text/babel">
  setInterval(showClock, 1000);
  function showClock() {
    const elem = (
      <div>
        <h1>안녕, 리액트!</h1>
        <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
      </div>
    );
    ReactDOM.render(elem, document.getElementById("root"));
  }
</script>
```

### clock\_test2.html

시, 분, 초를 각각 따로 추출:

```html
<script type="text/babel">
  setInterval(showClock, 1000);
  function showClock () {
    const d = new Date();
    const hour = d.getHours();
    const min = d.getMinutes();
    const sec = d.getSeconds();
    const elem = <div>{hour}:{min}:{sec}</div>;
    ReactDOM.render(elem, document.getElementById("root"));
  }
</script>
```

### binary\_clock.html

2진수로 현재 시각 표현:

```js
for (let i = 0; i < binStr.length; i++) {
  const v = parseInt(binStr.substr(i, 1));
  const bin = "0000" + v.toString(2);
  const bin8 = bin.substr(bin.length - 4, 4);
  for (let j = 0; j < bin8.length; j++) {
    if (bin8[j] === '0') {
      lines.push(<span style={{ color: 'brown' }}>○</span>);
    } else {
      lines.push(<span style={{ color: 'red' }}>●</span>);
    }
  }
  lines.push(<br />);
}
```

* `ReactDOM.render()`로 DOM에 적용
* `{…}` 내부에 JSX 배열 지정 가능
* 가상 DOM 덕분에 실제 DOM은 변경된 부분만 업데이트되어 성능이 뛰어남

## 결론

React는

* Element로 구성된 UI를 Component로 조립
* Virtual DOM을 활용해 효율적인 렌더링
* 상태 변화에 따른 자동 UI 갱신
* HTML 내에서도 JSX와 Babel로 간단히 테스트 가능

이를 통해 빠르고 부드러운 웹 애플리케이션 개발이 가능해짐
