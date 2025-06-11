# Web Programming
## 2025.03.27 학습내용
# React 기초 및 댓글 컴포넌트 만들기 정리

## 1. React 컴포넌트란?

- React 컴포넌트는 UI를 구성하는 독립적이고 재사용 가능한 단위입니다.
- 컴포넌트는 함수형 또는 클래스형으로 만들 수 있습니다.
- 컴포넌트 이름은 대문자로 시작해야 하며, HTML, CSS, JavaScript를 함께 사용합니다.

---

## 2. Props (속성)

- Props는 컴포넌트에 전달되는 데이터입니다.
- 읽기 전용이며, 컴포넌트에 다양한 데이터를 전달해 UI를 동적으로 변경할 수 있습니다.
- 중괄호 `{}`를 사용해 문자열 이외의 값을 전달합니다.

---

## 3. 함수형 컴포넌트와 클래스형 컴포넌트 비교

| 구분              | 함수형 컴포넌트            | 클래스형 컴포넌트        |
|-------------------|----------------------------|-------------------------|
| 작성 방식         | 함수                       | 클래스                  |
| 상태 관리         | useState Hook              | this.state              |
| 생명주기 관리     | useEffect Hook             | componentDidMount 등    |
| 코드 길이         | 간결                       | 비교적 길다             |
| this 사용 여부    | 없음                       | 있음                    |
| Hooks 사용 여부   | 가능                       | 불가능                  |

---

## 4. 컴포넌트 합성 (Composition)

- 작은 컴포넌트를 조합하여 복잡한 UI를 구성하는 방법입니다.
- `props.children`을 활용해 내부 컴포넌트를 포함할 수 있습니다.

---

## 5. 컴포넌트 추출 (Extraction)

- 큰 컴포넌트에서 일부 기능이나 UI를 분리해 별도의 컴포넌트로 만드는 방법입니다.
- 유지보수성과 재사용성을 높입니다.

---

## 6. 댓글 컴포넌트 만들기 예제

### Comment.jsx

```jsx
import React from "react";

const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16,
  },
  imageContainer: {},
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentContainer: {
    marginLeft: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  nameText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  commentText: {
    color: "black",
    fontSize: 16,
  },
};

function Comment(props) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.imageContainer}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
          style={styles.image}
          alt="pic1"
        />
      </div>
      <div style={styles.contentContainer}>
        <span style={styles.nameText}>{props.name}</span>
        <span style={styles.commentText}>{props.comment}</span>
      </div>
    </div>
  );
}

export default Comment;
