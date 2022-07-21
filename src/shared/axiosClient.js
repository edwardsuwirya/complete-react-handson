import axios from "axios";
import {authorizationHeaderInterceptor} from "./interceptors/authorizationHeaderInterceptor";

const clientInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});

clientInstance.interceptors.request.use(authorizationHeaderInterceptor, null)
export default clientInstance;
