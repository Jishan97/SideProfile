import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

window.addEventListener('load', () => {
  registerSW()
})

ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root')
);

async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('./sw.js');
    } catch (e) {
      console.log(`SW registration failed`);
    }
  }
}