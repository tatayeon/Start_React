import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SingUp from './chapter_11/SignUp'
import AttendanceBook from './chapter_10/AttendanceBook'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AttendanceBook />
  </React.StrictMode>
);

// 성능 측정을 위해 reportWebVitals를 호출합니다.
reportWebVitals();