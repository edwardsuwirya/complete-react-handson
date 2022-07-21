import JsonPlaceHolderContent from "./components/JsonPlaceHolderContent";
import withContainer from "../../shared/components/withContainer";

const JsonPlaceHolderView = ({controller}) => {
    const {viewState, createPost} = controller();
    return <JsonPlaceHolderContent state={viewState} events={{createPost}}/>;
}

export default withContainer('Dashboard', JsonPlaceHolderView);
