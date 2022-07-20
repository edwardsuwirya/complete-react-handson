import "./loginPageStyle.css";
import useLoginPageController from "./useLoginPageController";
import LoginForm from "./component/LoginForm";

const LoginPageView = () => {
    const {
        onLogin,
        viewState
    } = useLoginPageController();
    return (
        <div className='login-container'>
            <LoginForm state={viewState} onLogin={onLogin}/>
        </div>
    );
}
export default LoginPageView;
