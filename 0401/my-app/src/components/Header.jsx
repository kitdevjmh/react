import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>안녕하세요, 저는 조민혁입니다.</h1>
      <nav>
        <a href="#about" style={styles.link}>소개</a>
        <a href="#skills" style={styles.link}>기술 스택</a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#333",
    color: "white",
    padding: "20px",
    textAlign: "center",
  },
  title: {
    margin: "0 0 10px",
  },
  link: {
    margin: "0 10px",
    color: "white",
    textDecoration: "none",
  }
};

export default Header;
