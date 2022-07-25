import {Route, Routes} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import App from "../App";
import useLoginPageController from "../features/login/views/useLoginPageController";
import useJsonPlaceHolderController from "../features/jsonPlaceHolder/views/useJsonPlaceHolderController";
import JsonPlaceHolderView from "../features/jsonPlaceHolder/views/JsonPlaceHolderView";
import JsonPlaceHolderListView from "../features/jsonPlaceHolder/views/JsonPlaceHolderListView";
import LoginPageView from "../features/login/views/LoginPageView";

const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<LoginPageView controller={useLoginPageController}/>}/>
            <Route element={<ProtectedRoute/>}>
                <Route path="main" element={<App/>}>
                    <Route path="jsonplaceholder"
                           element={<JsonPlaceHolderView controller={useJsonPlaceHolderController}/>}/>
                    <Route path="jsonplaceholderList"
                           element={<JsonPlaceHolderListView/>}/>
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
    )
}

export default AppRouter
