import React, { useState } from "react";
import HabitItem from "./components/HabitItem";
import Header from "./components/Header";
import FilterButtons from "./components/FilterButtons";
import CompletionRate from "./components/CompletionRate";
import CompletionChart from "./components/CompletionChart";
import "./App.css";

const habitsList = [
  { id: 1, title: "물 2L 마시기" },
  { id: 2, title: "운동 30분" },
  { id: 3, title: "8시간 수면" }
];

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
      <Header />
      <FilterButtons setFilter={setFilter} />

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

      <CompletionRate rate={completionRate} />
      <CompletionChart rate={completionRate} />
    </div>
  );
}

export default App;
