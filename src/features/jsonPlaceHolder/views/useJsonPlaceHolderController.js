import {useEffect} from "react";
import useViewState from "../../../shared/hook/useViewState";
import {useDispatch} from "react-redux";
import useJsonPlaceHolderService from "../../../services/jsonPlaceHolderService/useJsonPlaceHolderService";
import {addPost} from "../state/jsonPlaceHolderSlice";

const useJsonPlaceHolderController = () => {
    const {getPostById, createPost} = useJsonPlaceHolderService();
    const [viewState, setLoading, setData, setError] = useViewState();
    const dispatch = useDispatch();
    useEffect(() => {
        onGetPost();
    }, []);

    const onGetPost = async () => {
        setLoading();
        try {
            const response = await getPostById(1);
            setData(response)
        } catch (e) {
            setError('Oops something went wrong');
        }
    }
    const onCreatePost = async () => {
        setLoading();
        try {
            const title = 'Hello World';
            const body = 'This is a new post.'
            const response = await createPost(title, body)
            setData(response)
            dispatch(addPost({title, body}));
        } catch (e) {
            setError('Oops something went wrong');
        }
    }
    return {
        viewState, onCreatePost
    }
}

export default useJsonPlaceHolderController;
