import JsonPlaceHolderContent from "./components/JsonPlaceHolderContent";

const JsonPlaceHolderView = ({controller}) => {
    const {viewState, onCreatePost} = controller();
    return <JsonPlaceHolderContent state={viewState} onCreatePost={onCreatePost}/>;
}

export default JsonPlaceHolderView;
