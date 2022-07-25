const loginService = ({doPost, doGet}) => {
    const doAuthenticate = async (userName, password) => {
        try {
            return await doPost({
                url: '/auth', data: {
                    userName: userName,
                    userPassword: password
                }
            })
        } catch (e) {
            throw new Error(e);
        }
    }
    const doGetUser = async () => {
        try {
            return await doGet({
                url: '/protected/user'
            })
        } catch (e) {
            throw new Error(e);
        }
    }
    return {
        doAuthenticate, doGetUser
    }
}

export default loginService;
