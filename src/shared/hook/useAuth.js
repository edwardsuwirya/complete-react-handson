import {createContext, useContext, useState} from "react";
import {useLocalStorage} from "./useLocalStorage";
import {useDeps} from "../depContext";
import {APP_TOKEN, USER_INFO} from "../constants";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const {apiClient, services} = useDeps();
    const loginService = services.loginService(apiClient());
    const [token, setToken] = useLocalStorage(APP_TOKEN, null);
    const [userInfo, setUserInfo] = useLocalStorage(USER_INFO, null);
    const login = async (data) => {
        try {
            const response = await loginService.doAuthenticate(data.userName, data.password);
            if (response) {
                setToken(response.token);
                const userResponse = await loginService.doGetUser();
                setUserInfo(userResponse.message);
            }
        } catch (e) {
            console.log(e)
            throw e
        }
    };

    const logout = () => {
        setToken(null);
        setUserInfo(null);
    };
    return <AuthContext.Provider value={{token, userInfo, login, logout}}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};
