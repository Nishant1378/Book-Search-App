import React from 'react'
import ReactDOM from 'react-dom'; // Import ReactDOM directly
import App from './App.jsx';
import './index.css';

const main = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

export default main