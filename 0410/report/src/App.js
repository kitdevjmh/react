import React, { useState } from "react";
import "./App.css";

const habitsList = [
  { id: 1, title: "물 2L 마시기" },
  { id: 2, title: "운동 30분" },
  { id: 3, title: "8시간 수면" }
];

function HabitItem({ title, isDone, onToggle }) {
  return (
    <div className={`habit-item ${isDone ? "done" : ""}`} onClick={onToggle}>
      <input type="checkbox" checked={isDone} readOnly />
      <span>{title}</span>
    </div>
  );
}

function App() {
  const [completed, setCompleted] = useState([]);
  const [filter, setFilter] = useState("all");

  const toggleHabit = (id) => {
    setCompleted((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredHabits = habitsList.filter((habit) => {
    if (filter === "completed") return completed.includes(habit.id);
    if (filter === "incomplete") return !completed.includes(habit.id);
    return true;
  });

  const completionRate = Math.round((completed.length / habitsList.length) * 100);

  return (
    <div className="app">
      <h1>🧘‍♀️ Daily Health Tracker</h1>
      <p>오늘 날짜: {new Date().toLocaleDateString()}</p>
      <div className="filter-buttons">
        <button onClick={() => setFilter("all")}>전체</button>
        <button onClick={() => setFilter("completed")}>완료</button>
        <button onClick={() => setFilter("incomplete")}>미완료</button>
      </div>

      <div className="habit-list">
        {filteredHabits.map((habit) => (
          <HabitItem
            key={habit.id}
            title={habit.title}
            isDone={completed.includes(habit.id)}
            onToggle={() => toggleHabit(habit.id)}
          />
        ))}
      </div>

      <p>✅ 완료율: {completionRate}%</p>
    </div>
  );
}

export default App;
