import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import "./i18n";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);