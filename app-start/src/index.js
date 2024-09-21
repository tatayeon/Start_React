import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <NotificationList />
  </React.StrictMode>
);

// 성능 측정을 위해 reportWebVitals를 호출합니다.
reportWebVitals();
