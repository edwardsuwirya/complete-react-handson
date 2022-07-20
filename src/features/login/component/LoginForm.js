import AppFormInput from "../../../shared/components/appFormInput/AppFormInput";
import AppButton from "../../../shared/components/appButton/AppButton";
import withViewState from "../../../shared/components/withViewState";
import useLoginFormController from "./useLoginFormController";

const LoginForm = ({children, onLogin}) => {
    const [userName, password, onUserNameChange, onPasswordChange, onLoginBtnClick] = useLoginFormController()
    return (
        <main className='form-container'>
            <AppFormInput id='userName' label='User Name' value={userName}
                          onValueChange={onUserNameChange}/>
            <AppFormInput id='password' type='password' label='Password' value={password}
                          onValueChange={onPasswordChange}/>
            <AppButton handleClick={() => onLoginBtnClick(onLogin)} label='Login'/>
            {children}
        </main>
    );
}

export default withViewState(LoginForm)
