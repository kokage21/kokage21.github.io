import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <RemoveLoading />
  </StrictMode>,
)

function RemoveLoading() {
  React.useEffect(() => {
    const loader = document.getElementById('loading-text');
    if (loader) loader.remove();
  }, []);
  return null;
}
