import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"

import App from './App.jsx';

import './index.css';
import { ThemeProvider } from './Contexts/ThemeContext.jsx';
import { UserProvider } from './Contexts/UserContext.jsx';
import { CommunityProvider } from './Contexts/CommunityContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <UserProvider>
          <CommunityProvider>
            <App />
          </CommunityProvider>
        </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
