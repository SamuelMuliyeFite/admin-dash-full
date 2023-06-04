import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { StateProvider } from '../src/Context/StateProvider';
import { initialstate } from '../src/Context/initialstate';
import reducer from '../src/Context/reducer';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    
     <StateProvider initialstate={initialstate} reducer={reducer}>
             <BrowserRouter>
             <App />
             
             </BrowserRouter>

     </StateProvider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();









