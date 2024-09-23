import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList'
import TemperatureInput from './chapter_12/TemperatureInput';
import Calculator from './chapter_12/Calculator';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
);

// 성능 측정을 위해 reportWebVitals를 호출합니다.
reportWebVitals();
