const withViewState = (Component) => ({state, ...props}) => {
    if (state.isLoading) return <div>Loading data.</div>;
    if (state.error) return <div>Error</div>;
    if (!state.data) return <div>Data is empty.</div>;

    return <Component data={state.data} {...props} />;
};

export default withViewState;
