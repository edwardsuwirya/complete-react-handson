import {useDeps} from "../../shared/depContext";
import {useEffect} from "react";
import useViewState from "../../shared/useViewState";

const JsonPlaceHolderController = () => {
    const {apiClient} = useDeps();
    const {doGet, doPost} = apiClient()
    const [viewState, setViewState] = useViewState();
    useEffect(() => {
        getPost();
    }, []);

    const getPost = async () => {
        setViewState({isLoading: true, data: null, error: null})
        try {
            const response = await doGet({url: '/1'});
            setViewState({isLoading: false, data: response, error: null})
        } catch (e) {
            setViewState({isLoading: false, data: null, error: e})
        }
    }
    const createPost = async () => {
        setViewState({isLoading: true, data: null, error: null})
        try {
            const response = await doPost({
                url: '/', data: {
                    title: "Hello World!",
                    body: "This is a new post."
                }
            })
            setViewState({isLoading: false, data: response, error: null})
        } catch (e) {
            setViewState({isLoading: false, data: null, error: e})
        }
    }
    const onCreatePost = () => {
        createPost();
    }
    return {
        viewState, onCreatePost
    }
}

export default JsonPlaceHolderController;
