import axios from "axios";

const clientInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL

});

export default clientInstance;
