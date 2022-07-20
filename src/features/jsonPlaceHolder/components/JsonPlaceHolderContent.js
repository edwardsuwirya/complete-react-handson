import withViewState from "../../../shared/components/withViewState";

const JsonPlaceHolderContent = ({data, onCreatePost}) => {
    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
            <button onClick={onCreatePost}>Create Post</button>
        </div>
    )
}

export default withViewState(JsonPlaceHolderContent);
