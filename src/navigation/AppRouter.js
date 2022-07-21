import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DepsProvider} from "../shared/depContext";
import ApiClientFactory from "../shared/apiClientFactory";
import clientInstance from "../shared/axiosClient";
import loginService from "../services/loginService";
import jsonPlaceHolderService from "../services/jsonPlaceHolderService";
import {AuthProvider} from "../shared/hook/useAuth";
import LoginPageView from "../features/login/LoginPageView";
import ProtectedRoute from "./ProtectedRoute";
import App from "../App";
import JsonPlaceHolderView from "../features/jsonPlaceHolder/JsonPlaceHolderView";
import useLoginPageController from "../features/login/useLoginPageController";
import useJsonPlaceHolderController from "../features/jsonPlaceHolder/useJsonPlaceHolderController";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <DepsProvider
                apiClient={() => ApiClientFactory(clientInstance)}
                services={{
                    loginService, jsonPlaceHolderService
                }}
            >
                <AuthProvider>
                    <Routes>
                        <Route index element={<LoginPageView controller={useLoginPageController}/>}/>
                        <Route element={<ProtectedRoute/>}>
                            <Route path="main" element={<App/>}>
                                <Route path="jsonplaceholder"
                                       element={<JsonPlaceHolderView controller={useJsonPlaceHolderController}/>}/>
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
    )
}

export default AppRouter