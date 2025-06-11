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
## 🧑‍💻 Web Programming & React 개요
---

## 🚀 React란?
> 사용자 인터페이스를 만들기 위한 JavaScript 라이브러리

- Facebook이 2013년에 발표한 오픈소스 라이브러리
- Virtual DOM과 JSX 문법 기반
- 컴포넌트를 조합하여 UI 구성
- SPA(Single Page Application) 구현에 최적화

### 주요 특징
- 선언적 UI
- 컴포넌트 기반 구조
- 효율적 업데이트 (Virtual DOM)
- JSX 문법 사용
- 다양한 생태계와 도구 지원

---

## 🎯 React의 장점

1. 이해하기 쉬운 개발 워크플로우
2. 유연성과 높은 호환성
3. 컴포넌트 재사용성
4. 고성능 Virtual DOM
5. Flux, Redux 상태관리
6. 풍부한 개발 도구
7. React Native를 통한 모바일 확장
8. 방대한 커뮤니티
9. JSX 구문으로 HTML 확장
10. Hook 기반 구조

---

## 🧠 브라우저 렌더링 과정

1. **파싱(Parsing)**: DOM Tree / CSSOM Tree 생성
2. **스타일링**: Render Tree 구성
3. **레이아웃(Layout)**: 노드 배치 및 크기 계산
4. **페인팅(Paint)**: 실제 화면에 픽셀로 표시
5. **합성(Compositing)**: 페인트된 요소들을 하나의 화면으로 합성

### 🔄 Virtual DOM의 도입 이유
- Real DOM은 성능에 비효율적
- 변경사항을 가상 DOM에서 먼저 비교(diffing)
- 실제 DOM에는 최소 변경만 반영 → 성능 향상

---

## 🛠️ React 개발 환경

- Node.js (14.0.0 이상)
- npm (5.6 이상)
- VS Code + 확장 프로그램들:
  - Prettier, Babel, GitLens, Stylelint, React Snippets 등

### 패키지 매니저
- `npm`, `npx`: 패키지 설치 및 실행
- `nvm`: Node 버전 관리
- `yarn`: 페이스북이 만든 빠른 패키지 매니저

---

## 📦 바벨(Babel) & 웹팩(WebPack)

### Babel
- 최신 JavaScript를 오래된 브라우저 호환 문법으로 변환
- JSX 문법 변환
- `babel-polyfill`을 통한 런타임 폴리필

### WebPack
- 여러 모듈들을 하나의 파일로 번들링
- CSS, 이미지, JS 파일까지 모듈화

---




