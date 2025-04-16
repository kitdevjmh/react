import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter3 from './chapter_07/Counter3';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<Counter3 />);

<React.StrictMode>
    <App />
</React.StrictMode>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
