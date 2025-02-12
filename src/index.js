import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from "react-router-dom";
/* import { AuthProviderWrapper } from './context/auth.context'; */


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <AuthProviderWrapper> */}
        <App />
      {/* </AuthProviderWrapper> */}
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
