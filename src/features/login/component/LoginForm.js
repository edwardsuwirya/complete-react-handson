import AppFormInput from "../../../shared/components/AppFormInput";
import AppButton from "../../../shared/components/AppButton";
import withViewState from "../../../shared/components/withViewState";

const LoginForm = ({children, events, controller}) => {
    const [userName, password, onUserNameChange, onPasswordChange] = controller();
    return (
        <main className='container'>
            <AppFormInput id='userName' label='User Name' value={userName}
                          onValueChange={onUserNameChange}/>
            <AppFormInput id='password' type='password' label='Password' value={password}
                          onValueChange={onPasswordChange}/>
            <AppButton handleClick={() => events(userName, password)} label='Login'/>
            {children}
        </main>
    );
}

export default withViewState(LoginForm)
