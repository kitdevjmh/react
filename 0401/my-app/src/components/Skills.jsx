import React from "react";

const Skills = () => {
  const skills = ["JavaScript", "React", "Node.js", "HTML", "CSS", "Git"];

  return (
    <section id="skills">
      <h2>🛠 기술 스택</h2>
      <ul style={styles.list}>
        {skills.map((skill, index) => (
          <li key={index} style={styles.item}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

const styles = {
  list: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    flexWrap: "wrap",
    gap: "10px"
  },
  item: {
    backgroundColor: "#eee",
    padding: "10px 15px",
    borderRadius: "8px",
  }
};

export default Skills;
