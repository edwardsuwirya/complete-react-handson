import JsonPlaceHolderContent from "./components/JsonPlaceHolderContent";
import useJsonPlaceHolderController from "./useJsonPlaceHolderController";

const JsonPlaceHolderView = () => {
    const {viewState, onCreatePost} = useJsonPlaceHolderController();
    return <JsonPlaceHolderContent state={viewState} onCreatePost={onCreatePost}/>;
}

export default JsonPlaceHolderView;
