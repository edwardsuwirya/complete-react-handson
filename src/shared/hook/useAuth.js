import {createContext, useContext} from "react";
import {useLocalStorage} from "./useLocalStorage";
import {useDeps} from "../depContext";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const {apiClient, services} = useDeps();
    const loginService = services.loginService(apiClient);
    const [user, setUser] = useLocalStorage("user", null);
    const login = async (data) => {
        try {
            const response = await loginService.doAuthenticate(data.userName, data.password);
            if (response) {
                setUser(data.userName);
            }
        } catch (e) {
            console.log(e)
            throw e
        }
    };

    const logout = () => {
        setUser(null);
    };
    return <AuthContext.Provider value={{user, login, logout}}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};
