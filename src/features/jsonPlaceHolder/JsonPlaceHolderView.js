import JsonPlaceHolderContent from "./components/JsonPlaceHolderContent";

const JsonPlaceHolderView = ({controller}) => {
    const {viewState, createPost} = controller();
    return <JsonPlaceHolderContent state={viewState} onCreatePost={createPost}/>;
}

export default JsonPlaceHolderView;
