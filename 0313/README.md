# Web Programming with Software Engineering

웹 프로그래밍에 대한 전반적인 이론과 실습 내용을 정리한 자료입니다. HTML, CSS, JavaScript, DOM, SPA/MPA, Web Server, React 등 웹 개발의 핵심 개념을 포함합니다.

## 📚 목차

1. [HTML](#html)
2. [CSS](#css)
3. [JavaScript & ECMAScript](#javascript--ecmascript)
4. [DOM (Document Object Model)](#dom-document-object-model)
5. [Rendering](#rendering)
6. [SPA vs MPA](#spa-vs-mpa)
7. [Web Client & Browser](#web-client--browser)
8. [Web Server (IIS, Tomcat, Apache)](#web-server)
9. [React](#react)
10. [발표 주제](#발표-주제)
11. [참고 자료](#참고-자료)

---

## HTML

**HTML (Hyper Text Markup Language)** 는 웹사이트의 구조를 정의하는 마크업 언어입니다.

- **Hyper Text**: 하이퍼링크로 다른 문서로 이동 가능한 텍스트
- **Markup Language**: 태그로 데이터의 구조를 명시하는 언어
- 문서의 외형 및 구조를 브라우저에 보여주는 방식 정의

---

## CSS

**CSS (Cascading Style Sheets)** 는 HTML 요소의 스타일을 지정하는 스타일시트 언어입니다.

- 문서의 색상, 폰트, 배경, 레이아웃 등을 지정
- **SASS**: CSS의 확장된 전처리기

### CSS 기능

- 색상/배경, 폰트/텍스트, 박스 모델, 리스트, 테이블, 사용자 인터페이스 등
- 최신 표준: **CSS3**

---

## JavaScript & ECMAScript

**JavaScript** 는 웹 페이지를 동작하게 하는 스크립트 언어입니다.

- **ECMAScript**는 JavaScript의 표준 사양
- 웹 페이지의 동적 기능을 구현
- 프로토타입 기반 객체지향 프로그래밍

---

## DOM (Document Object Model)

HTML 문서를 트리 형태로 구조화하여 JS로 조작 가능하게 한 객체 모델입니다.

- 각 HTML 태그는 하나의 DOM 객체로 표현
- `document.getElementById()`, `createElement()`, `appendChild()` 등으로 조작

### 예제

```html
<p id="firstP" style="color:blue" onclick="this.style.color='teal'">
  이것은 <span style="color:red">문장입니다.</span>
</p>

