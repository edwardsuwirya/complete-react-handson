import withViewState from "../../../shared/components/withViewState";

const JsonPlaceHolderContent = ({state, events: {createPost}}) => {
    console.log(state)
    return (
        <div>
            {state.data ? <>
                <h1>{state.data.title}</h1>
                <p>{state.data.body}</p>
                <button onClick={createPost}>Create Post</button>
            </> : <>Empty</>}

        </div>
    )
}

export default withViewState(JsonPlaceHolderContent);
