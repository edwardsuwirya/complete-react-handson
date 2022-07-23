const loginService = ({doPost}) => {
    const doAuthenticate = (userName, password) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (userName === 'enigma' && password === '123') {
                    resolve(true)
                } else {
                    reject('Unauthorized');
                }
            }, 5000)
        });
    }
    return {
        doAuthenticate
    }
}

export default loginService;
