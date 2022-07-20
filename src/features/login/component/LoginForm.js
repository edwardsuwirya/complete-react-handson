import AppFormInput from "../../../shared/components/AppFormInput";
import AppButton from "../../../shared/components/AppButton";
import withViewState from "../../../shared/components/withViewState";
import useLoginFormController from "./useLoginFormController";

const LoginForm = ({onLogin}) => {
    const [userName, password, onUserNameChange, onPasswordChange, onLoginBtnClick] = useLoginFormController()
    return (
        <main className='container'>
            <AppFormInput id='userName' label='User Name' value={userName}
                          onValueChange={onUserNameChange}/>
            <AppFormInput id='password' type='password' label='Password' value={password}
                          onValueChange={onPasswordChange}/>
            <AppButton handleClick={() => onLoginBtnClick(onLogin)} label='Login'/>
        </main>
    );
}

export default withViewState(LoginForm)
