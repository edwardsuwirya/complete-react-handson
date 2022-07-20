import JsonPlaceHolderContent from "./components/JsonPlaceHolderContent";
import useJsonPlaceHolderController from "./useJsonPlaceHolderController";
import withContainer from "../../shared/components/withContainer";

const JsonPlaceHolderView = () => {
    const {viewState, onCreatePost} = useJsonPlaceHolderController();
    return <JsonPlaceHolderContent state={viewState} onCreatePost={onCreatePost}/>;
}

export default withContainer('Dashboard', JsonPlaceHolderView);
