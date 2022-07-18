import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/Index';
import Chat from './components/chat/Index'
import { Routes, Route,BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/chat-box" element={<Chat />} />
      </Routes>
    </BrowserRouter>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

