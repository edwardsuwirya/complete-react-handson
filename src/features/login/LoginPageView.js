import withContainer from "../../shared/components/withContainer";
import "./loginPageStyle.css";
import useLoginPageController from "./useLoginPageController";
import LoginForm from "./component/LoginForm";

const LoginPageView = () => {
    const {
        onLogin,
        viewState
    } = useLoginPageController();
    return (
        <LoginForm state={viewState} onLogin={onLogin}/>
    );
}
export default withContainer('Login', LoginPageView);
