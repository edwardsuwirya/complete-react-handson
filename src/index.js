import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {DepsProvider} from "./shared/depContext";
import ApiClientFactory from "./shared/apiClientFactory";
import clientInstance from "./shared/axiosClient";
import {AuthProvider} from "./shared/hook/useAuth";
import loginService from "./services/loginService";
import jsonPlaceHolderService from "./services/jsonPlaceHolderService";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPageView from "./features/login/LoginPageView";
import ProtectedRoute from "./navigation/ProtectedRoute";
import JsonPlaceHolderView from "./features/jsonPlaceHolder/JsonPlaceHolderView";

//create .env file in the root of the project
//set environment variables starting with REACT_APP_
//access it by process.env.REACT_APP_... in components
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <DepsProvider
                apiClient={() => ApiClientFactory(clientInstance)}
                services={{
                    loginService, jsonPlaceHolderService
                }}
            >
                <AuthProvider>
                    <Routes>
                        <Route index element={<LoginPageView/>}/>
                        <Route element={<ProtectedRoute/>}>
                            <Route path="main" element={<App/>}>
                                <Route path="jsonplaceholder" element={<JsonPlaceHolderView/>}/>
                            </Route>
                        </Route>
                        <Route
                            path="*"
                            element={
                                <main style={{padding: "1rem"}}>
                                    <p>Oopss... page not found</p>
                                </main>
                            }
                        />
                    </Routes>
                </AuthProvider>
            </DepsProvider>
        </BrowserRouter>
    </React.StrictMode>
);
