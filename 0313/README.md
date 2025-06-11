# Web Programming
## 2025.03.13 학습내용
**HTML (Hyper Text Markup Language)** 는 웹사이트의 구조를 정의하는 마크업 언어
- **Hyper Text**: 하이퍼링크로 다른 문서로 이동 가능한 텍스트
- **Markup Language**: 태그로 데이터의 구조를 명시하는 언어
- 문서의 외형 및 구조를 브라우저에 보여주는 방식 정의

---

## CSS

**CSS (Cascading Style Sheets)** 는 HTML 요소의 스타일을 지정하는 스타일시트 언어

- 문서의 색상, 폰트, 배경, 레이아웃 등을 지정
- **SASS**: CSS의 확장된 전처리기

### CSS 기능

- 색상/배경, 폰트/텍스트, 박스 모델, 리스트, 테이블, 사용자 인터페이스 등
- 최신 표준: **CSS3**

---

## JavaScript & ECMAScript

**JavaScript** 는 웹 페이지를 동작하게 하는 스크립트 언어

- **ECMAScript**는 JavaScript의 표준 사양
- 웹 페이지의 동적 기능을 구현
- 프로토타입 기반 객체지향 프로그래밍

---
# 🌐 Web Programming Overview

웹 프로그래밍 기초부터 SPA/MPA 비교, 렌더링 방식, 주요 웹 서버와 React까지 전반적인 웹 기술 스택을 정리한 문서

---

## 📄 Rendering

웹 렌더링은 **HTML**과 **CSS**를 파싱하여 브라우저에 시각적으로 보여주는 과정

- **HTML → DOM 트리 생성**
- **CSS → CSSOM 트리 생성**
- 두 트리를 결합하여 **렌더링 트리(Render Tree)** 구성
- 각 요소의 **위치, 크기 계산**
- 브라우저가 노드를 화면에 출력

---

## ⚔️ SPA vs MPA

### 🧩 SPA (Single Page Application)

- 한 개의 HTML 페이지에서 모든 콘텐츠 로드
- 클라이언트 사이드 렌더링 (CSR)
- 빠른 전환, 깜빡임 없음
- React, Vue, Angular 등 사용
- 예시: **Facebook, Gmail**

### 📑 MPA (Multi Page Application)

- 각 요청마다 새 페이지를 서버에서 받아옴
- 서버 사이드 렌더링 (SSR)
- SEO에 유리, 초기 로딩 빠름
- 전통적인 웹사이트 구조
- 예시: **일반 쇼핑몰, 뉴스사이트**

---

## 🧭 Web Client & Browser

- **Client**: 서비스를 요청하는 측 (예: 웹 브라우저)
- **Browser**: HTML/CSS/JS 문서를 요청, 해석, 렌더링하는 소프트웨어

대표 브라우저:
- Chrome
- Edge
- Firefox
- Safari

---

## 🖥 Web Server

## 🌐React

- 컴포넌트 기반 프론트엔드 라이브러리
- JSX, 생명주기, 이벤트 처리, 상태 관리
- SPA 개발에 적합




