import {useDeps} from "../../shared/depContext";

const useJsonPlaceHolderService = () => {
    const {apiClient, services} = useDeps();
    return services.jsonPlaceHolderService(apiClient);
}
export default useJsonPlaceHolderService;
