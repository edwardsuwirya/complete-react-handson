const jsonPlaceHolderService = ({doGet, doPost}) => {
    const getPostById = async (id) => {
        try {
            return await doGet({url: '/' + id})
        } catch (e) {
            throw new Error(e.message);
        }
    }
    const createPost = async (title, body) => {
        try {
            return await doPost({
                url: '/', data: {
                    title,
                    body
                }
            })
        } catch (e) {
            throw new Error(e.message);
        }
    }
    return {
        getPostById, createPost
    }
}

export default jsonPlaceHolderService;
