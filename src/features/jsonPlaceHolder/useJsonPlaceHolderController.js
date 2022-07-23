import {useDeps} from "../../shared/depContext";
import {useEffect} from "react";
import useViewState from "../../shared/hook/useViewState";
import useJsonPlaceHolderService from "../../services/jsonPlaceHolderService/useJsonPlaceHolderService";

const useJsonPlaceHolderController = () => {
    const {getPostById, createPost} = useJsonPlaceHolderService();
    const [viewState, setLoading, setData, setError] = useViewState();
    useEffect(() => {
        onGetPost();
    }, []);

    const onGetPost = async () => {
        setLoading();
        try {
            const response = await getPostById(1);
            setData(response)
        } catch (e) {
            setError(e)
        }
    }
    const onCreatePost = async () => {
        setLoading();
        try {
            const response = await createPost("Hello World!", "This is a new post.")
            setData(response)
        } catch (e) {
            setError(e)
        }
    }
    return {
        viewState, onCreatePost
    }
}

export default useJsonPlaceHolderController;
