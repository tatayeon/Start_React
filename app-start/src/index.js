import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ConfirmButton from './chapter_08/ConfirmButton';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ConfirmButton />
  </React.StrictMode>
);

// 성능 측정을 위해 reportWebVitals를 호출합니다.
reportWebVitals();