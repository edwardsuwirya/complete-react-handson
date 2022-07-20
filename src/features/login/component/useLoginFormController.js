import {useState} from "react";

const useLoginPageController = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const onUserNameChange = (event) => setUserName(event.target.value);
    const onPasswordChange = (event) => setPassword(event.target.value);
    const onLoginBtnClick = (onLogin) => {
        onLogin(userName, password)
    }
    return [userName, password, onUserNameChange, onPasswordChange, onLoginBtnClick]
}

export default useLoginPageController;
