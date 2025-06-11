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

##SPA vs MPA

**SPA (Single Page Application)
한 개의 HTML 페이지에서 모든 콘텐츠 로드

클라이언트 사이드 렌더링 (CSR)

빠른 전환, 깜빡임 없음

React, Vue 등 사용

MPA (Multi Page Application)
각 요청마다 새 페이지 로드

서버 사이드 렌더링 (SSR)

SEO에 유리

초기 로딩 빠름

### 예제

```html
<p id="firstP" style="color:blue" onclick="this.style.color='teal'">
  이것은 <span style="color:red">문장입니다.</span>
</p>

