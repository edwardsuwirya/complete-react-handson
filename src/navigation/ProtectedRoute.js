import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "../shared/hook/useAuth";

const ProtectedRoute = () => {
    const {user} = useAuth()
    console.log('???',user);
    return user !== null ? <Outlet/> : <Navigate to='/' replace/>;
};

export default ProtectedRoute;
