import React from "react";

function HabitItem({ title, isDone, onToggle }) {
  return (
    <div className={`habit-item ${isDone ? "done" : ""}`} onClick={onToggle}>
      <input type="checkbox" checked={isDone} readOnly />
      <span>{title}</span>
    </div>
  );
}

export default HabitItem;
