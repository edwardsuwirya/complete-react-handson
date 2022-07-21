import {useDeps} from "../../shared/depContext";
import {useEffect} from "react";
import useViewState from "../../shared/hook/useViewState";

const useJsonPlaceHolderController = () => {
    const {apiClient} = useDeps();
    const {doGet, doPost} = apiClient()
    const [viewState, setLoading, setData, setError] = useViewState();
    useEffect(() => {
        getPost();
    }, []);

    const getPost = async () => {
        setLoading();
        try {
            const response = await doGet({url: '/1'});
            setData(response);
        } catch (e) {
            setError(e);
        }
    }
    const createPost = async () => {
        setLoading();
        try {
            const response = await doPost({
                url: '/', data: {
                    title: "Hello World!",
                    body: "This is a new post."
                }
            })
            setData(response);
        } catch (e) {
            setError(e);
        }
    }
    return {
        viewState, createPost
    }
}

export default useJsonPlaceHolderController;
