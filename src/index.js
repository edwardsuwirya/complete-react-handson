import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from "./navigation/AppRouter";

//create .env file in the root of the project
//set environment variables starting with REACT_APP_
//access it by process.env.REACT_APP_... in components
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AppRouter/>
    </React.StrictMode>
);
