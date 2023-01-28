import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';

// navigator.serviceWorker.register('./firebase-message-sw.js')
/* if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./messaging_init_in_sw.js')
  .then(function(registration) {
    console.log('Registration successful, scope is:', registration.scope);
  }).catch(function(err) {
    console.log('Service worker registration failed, error:', err);
  });
} */


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
