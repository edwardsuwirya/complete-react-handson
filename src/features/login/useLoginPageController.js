import {useAuth} from "../../shared/hook/useAuth";
import useViewState from "../../shared/hook/useViewState";

const useLoginPageController = () => {
    const {login} = useAuth();
    const [viewState, setLoading, setData, setError] = useViewState();
    const onLogin = async (userName, password) => {
        setLoading();
        try {
            if (userName === '' && password === '') {
                setError('Please input your user name and password')
            } else {
                await login({userName, password});
                setData('');
            }
        } catch (e) {
            setError('Invalid User Name or password ');
        }
    }
    return {
        onLogin,
        viewState
    }
}

export default useLoginPageController;
