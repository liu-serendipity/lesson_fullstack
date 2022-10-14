import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
// auth 鉴权数据流管理
import { AuthContextProvider } from './store/auth-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
