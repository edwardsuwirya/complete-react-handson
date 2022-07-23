import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {DepsProvider} from "./shared/depContext";
import ApiClientFactory from "./shared/apiClientFactory";
import clientInstance from "./shared/axiosClient";
import {AuthProvider} from "./shared/hook/useAuth";
import loginService from "./services/loginService/loginService";
import jsonPlaceHolderService from "./services/jsonPlaceHolderService/jsonPlaceHolderService";

//create .env file in the root of the project
//set environment variables starting with REACT_APP_
//access it by process.env.REACT_APP_... in components
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <DepsProvider
            apiClient={ApiClientFactory(clientInstance)}
            services={{
                loginService, jsonPlaceHolderService
            }}
        >
            <AuthProvider>
                <App/>
            </AuthProvider>
        </DepsProvider>
    </React.StrictMode>
);
