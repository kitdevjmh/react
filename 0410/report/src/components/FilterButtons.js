import React from "react";

function FilterButtons({ setFilter }) {
  return (
    <div className="filter-buttons">
      <button onClick={() => setFilter("all")}>전체</button>
      <button onClick={() => setFilter("completed")}>완료</button>
      <button onClick={() => setFilter("incomplete")}>미완료</button>
    </div>
  );
}

export default FilterButtons;
