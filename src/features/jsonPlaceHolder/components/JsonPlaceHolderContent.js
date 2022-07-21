import withViewState from "../../../shared/components/withViewState";

const JsonPlaceHolderContent = ({data, events: {createPost}}) => {
    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
            <button onClick={createPost}>Create Post</button>
        </div>
    )
}

export default withViewState(JsonPlaceHolderContent);
