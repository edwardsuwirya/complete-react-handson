import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from "./navigation/AppRouter";
import ApiClientFactory from "./shared/apiClientFactory";
import clientInstance from "./shared/axiosClient";
import {DepsProvider} from "./shared/depContext";
import {Provider} from "react-redux";
import {store} from "./store";
import loginService from "./services/loginService/loginService";
import jsonPlaceHolderService from "./services/jsonPlaceHolderService/jsonPlaceHolderService";

//create .env file in the root of the project
//set environment variables starting with REACT_APP_
//access it by process.env.REACT_APP_... in components
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <DepsProvider
                apiClient={ApiClientFactory(clientInstance)}
                services={{
                    loginService, jsonPlaceHolderService
                }}
            >
                <AppRouter/>
            </DepsProvider>
        </Provider>
    </React.StrictMode>
);
