
📘 React 입문 정리
Web Programming II / 소플의 처음 만난 리액트 / ReactJS Tutorial for Beginners

📌 React란?
Facebook에서 개발한 JavaScript UI 라이브러리

컴포넌트(Component) 기반으로 UI를 구성

Virtual DOM을 사용하여 DOM 변경을 최소화하여 빠른 렌더링 제공

🔹 React Element
React 앱을 구성하는 가장 작은 단위

불변(immutable) 객체

HTML 요소처럼 보이지만, 실제로는 Virtual DOM에 존재

화면에 출력하려면 ReactDOM.render() 또는 root.render() 사용

🎯 Element 생성 방법
JSX 사용

jsx
복사
편집
const element = <div>Hello, world!</div>;
React.createElement() 사용

js
복사
편집
const element = React.createElement('div', null, 'Hello, world!');
🔹 JSX 문법
HTML과 유사하지만 JavaScript 코드

Babel이 React.createElement()로 변환

중괄호 {} 안에 표현식 사용 가능

🔹 React Component
여러 Element를 묶어 UI를 구성하는 독립적이고 재사용 가능한 단위

✅ 함수형 컴포넌트
jsx
복사
편집
function Welcome() {
  return <h1>Hello, React Component!</h1>;
}
✅ 클래스형 컴포넌트
jsx
복사
편집
class Welcome extends React.Component {
  render() {
    return <h1>Hello, React Component!</h1>;
  }
}
🔄 Element vs Component
구분	React Element	React Component
정의	UI의 가장 작은 단위	여러 Element를 포함하는 독립적 UI 블록
형태	변경 불가능한 객체	함수 또는 클래스
사용 예	<h1>Hello</h1>	function App() { return <h1>Hello</h1>; }
재사용	❌ 불가능	✅ 가능
리렌더링 방식	새로운 Element 생성 필요	상태 변화에 따라 자동 렌더링

♻️ React Element의 불변성
기존 Element는 수정 불가

변경하려면 새로운 Element를 생성

Virtual DOM의 diffing을 통해 변경된 부분만 실제 DOM 업데이트

jsx
복사
편집
const element = <h1>Hello, React!</h1>;
const newElement = <h1>Hi!</h1>;
