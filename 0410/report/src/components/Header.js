import React from "react";

function Header() {
  return (
    <header className="header">
      <h1>🧘‍♀️ Daily Health Tracker</h1>
      <p>오늘 날짜: {new Date().toLocaleDateString()}</p>
    </header>
  );
}

export default Header;
