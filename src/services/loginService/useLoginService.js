import {useDeps} from "../../shared/depContext";

const useLoginService = () => {
    const {apiClient, services} = useDeps();
    return services.loginService(apiClient);
}
export default useLoginService;
